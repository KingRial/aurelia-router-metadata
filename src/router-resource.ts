import { Container } from "aurelia-dependency-injection";
import { getLogger, Logger } from "aurelia-logging";
import { metadata } from "aurelia-metadata";
import { PLATFORM } from "aurelia-pal";
import { NavigationInstruction, NavModel, RouteConfig, Router, RouterConfiguration } from "aurelia-router";
import {
  IConfigureRouterInstruction,
  ICreateRouteConfigInstruction,
  IModuleLoader,
  IRouteConfigInstruction,
  IRouterResourceTarget,
  IRouterResourceTargetProto
} from "./interfaces";
import { DefaultRouteConfigFactory, RouteConfigFactory } from "./route-config-factory";
import { routerMetadata } from "./router-metadata";
import { RouterMetadataConfiguration,RouterMetadataSettings } from "./router-metadata-configuration";

const configureRouterSymbol = (Symbol("configureRouter") as any) as string;
type ConfigureRouter = (config: RouterConfiguration, router: Router) => Promise<void> | PromiseLike<void> | void;

const logger = getLogger("router-metadata") as Logger;

/**
 * Identifies a class as a resource that can be navigated to (has routes) and/or
 * configures a router to navigate to other routes (maps routes)
 */
export class RouterResource {
  /**
   * The moduleId (`PLATFORM.moduleName`) of the class this resource applies to
   */
  public moduleId: string;
  /**
   * The target ("constructor Function") of the class this resource applies to
   */
  public target: IRouterResourceTarget;

  /**
   * True if this resource is a `@routeConfig`
   */
  public isRouteConfig: boolean;

  /**
   * True if this resource is a `@configureRouter`
   */
  public isConfigureRouter: boolean;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * The moduleIds (`PLATFORM.moduleName`) of the routes that will be mapped on the target class' router
   */
  public routeConfigModuleIds: string[];

  /**
   * Only applicable when `isConfigureRouter`
   *
   * If true: when `loadChildRoutes()`is called on this instance, it will also call `loadChildRoutes()` on the resources
   * associated with the `routeConfigModuleIds` set on this instance (if they are also `@configureRouter`)
   */
  public enableEagerLoading: boolean;

  /**
   * Only applicable when `isRouteConfig`
   *
   * The `RouteConfig` objects with which the target's class is mapped in parent `@configureRouter`
   */
  public ownRoutes: RouteConfig[];

  /**
   * Only applicable when `isConfigureRouter`
   *
   * The `RouteConfig` objects that will be mapped on the target class' router
   */
  public childRoutes: RouteConfig[];

  /**
   * Only applicable when `isConfigureRouter`
   *
   * Filter function to determine which `RouteConfig` objects to exclude from mapping on the target class' router
   */
  public filterChildRoutes: (
    config: RouteConfig,
    allConfigs: RouteConfig[],
    configureInstruction: IConfigureRouterInstruction
  ) => boolean;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * True if `loadChildRoutes()` has run on this instance
   */
  public areChildRoutesLoaded: boolean;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * True if `loadChildRouteModules()` has run on this instance
   */
  public areChildRouteModulesLoaded: boolean;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * True if `configureRouter()` was invoked on the target class, and we are currently still loading the child routes
   */
  public isConfiguringRouter: boolean;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * True if `configureRouter()` has run on this instance and the childRoutes are mapped to the target class' router
   */
  public isRouterConfigured: boolean;

  /**
   * The parent route
   */
  public parent: RouterResource;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * The router that was passed to the target class' `configureRouter()` method
   */
  public router: Router;

  /**
   * Only applicable when `isConfigureRouter`
   *
   * A convenience property which returns `router.container`, or `null` if the router is not set
   */
  public get container(): Container {
    return this.router ? this.router.container : (null as any);
  }

  /**
   * Only applicable when `isConfigureRouter`
   *
   * A convenience property which returns `router.container.viewModel`, or `null` if the router is not set
   * This is an instance of the target class
   */
  public get instance(): IRouterResourceTargetProto {
    return this.container ? (this.container as any).viewModel : null;
  }

  /**
   * Returns a concatenation separated by '/' of the name of the first of `ownRoutes` of this instance,
   * together with the parents up to the root
   */
  public get path(): string {
    const ownName = (this.ownRoutes.length > 0 ? this.ownRoutes[0].name : null) as string;
    const parentPath = (this.parent ? this.parent.path : null) as string;

    return parentPath ? `${parentPath}/${ownName}` : ownName;
  }

  constructor(moduleId: string, target: Function) {
    this.moduleId = moduleId;
    this.target = target;
    this.isRouteConfig = false;
    this.isConfigureRouter = false;
    this.routeConfigModuleIds = [];
    this.enableEagerLoading = false;
    this.ownRoutes = [];
    this.childRoutes = [];
    this.filterChildRoutes = null as any;
    this.areChildRoutesLoaded = false;
    this.areChildRouteModulesLoaded = false;
    this.isConfiguringRouter = false;
    this.isRouterConfigured = false;
    this.parent = null as any;
    this.router = null as any;
  }

  /**
   * Creates a `@routeConfig` based on the provided instruction.
   *
   * This method is called by the `@routeConfig()` decorator, and can be used instead of the @routeConfig() decorator
   * to achieve the same effect.
   * @param instruction Instruction containing the parameters passed to the `@routeConfig` decorator
   */
  public static ROUTE_CONFIG(instruction: IRouteConfigInstruction): RouterResource {
    const resource = routerMetadata.getOrCreateOwn(instruction.target);
    resource.initialize(instruction);

    return resource;
  }

  /**
   * Creates a `@configureRouter` based on the provided instruction.
   *
   * This method is called by the `@configureRouter()` decorator, and can be used instead of the @configureRouter() decorator
   * to achieve the same effect.
   * @param instruction Instruction containing the parameters passed to the `@configureRouter` decorator
   */
  public static CONFIGURE_ROUTER(instruction: IConfigureRouterInstruction): RouterResource {
    const resource = routerMetadata.getOrCreateOwn(instruction.target);
    resource.initialize(instruction);

    return resource;
  }

  /**
   * Initializes this resource based on the provided instruction.
   *
   * This method is called by the static `ROUTE_CONFIG` and `CONFIGURE_ROUTER` methods, and can be used instead of those
   * to achieve the same effect. If there is a `routeConfigModuleIds` property present on the instruction, it will
   * be initialized as `@configureRouter`, otherwise as `@routeConfig`. To initialize a class as both, you'll need to call
   * this method twice with the appropriate instruction.
   * @param instruction Instruction containing the parameters passed to the `@configureRouter` decorator
   */
  public initialize(instruction: IRouteConfigInstruction | IConfigureRouterInstruction): void {
    const settings = this.getSettings(instruction);
    const moduleId = this.moduleId;
    const target = instruction.target;
    if (isConfigureRouterInstruction(instruction)) {
      logger.debug(`initializing @configureRouter for ${moduleId}`);

      const configureInstruction = instruction as IConfigureRouterInstruction;

      this.isConfigureRouter = true;
      this.routeConfigModuleIds = ensureArray(configureInstruction.routeConfigModuleIds);
      this.filterChildRoutes = settings.filterChildRoutes;
      this.enableEagerLoading = settings.enableEagerLoading;

      assignOrProxyPrototypeProperty(target.prototype, "configureRouter", configureRouterSymbol, configureRouter);
    } else {
      logger.debug(`initializing @routeConfig for ${this.moduleId}`);

      this.isRouteConfig = true;

      const configInstruction = { ...instruction, moduleId, settings };
      const configs = this.getConfigFactory().createRouteConfigs(configInstruction);
      for (const config of configs) {
        config.settings.routerResource = this;
        this.ownRoutes.push(config);
      }
    }
  }

  /**
   * Retrieves the `RouteConfig` objects which were generated by all referenced moduleIds
   * and assigns them to `childRoutes`
   *
   * Will also call this method on child resources if `enableEagerLoading` is set to true.
   *
   * Will simply return the previously fetched `childRoutes` on subsequent calls.
   *
   * This method is called by `configureRouter()`.
   *
   * @param router (Optional) The router that was passed to the target instance's `configureRouter()`
   */
  public async loadChildRoutes(router?: Router): Promise<RouteConfig[]> {
    this.router = router || (null as any);
    if (this.areChildRoutesLoaded) {
      return this.childRoutes;
    }

    logger.debug(`loading childRoutes for ${this.moduleId}`);

    await this.loadChildRouteModules();

    for (const moduleId of this.routeConfigModuleIds) {
      const resource = routerMetadata.getOwn(moduleId);
      resource.parent = this;
      if (resource.isConfigureRouter && this.enableEagerLoading) {
        await resource.loadChildRoutes();
      }
      for (const childRoute of resource.ownRoutes) {
        if (this.filterChildRoutes(childRoute, resource.ownRoutes, this)) {
          if (this.ownRoutes.length > 0) {
            childRoute.settings.parentRoute = this.ownRoutes[0];
          }
          this.childRoutes.push(childRoute);
        }
      }
    }

    for (const ownRoute of this.ownRoutes) {
      ownRoute.settings.childRoutes = this.childRoutes;
    }

    this.areChildRoutesLoaded = true;

    return this.childRoutes;
  }

  /**
   * Tells the platform loader to load the `routeConfigModuleIds` assigned to this resource
   *
   * If `enableEagerLoading` is set to true, will also call this method on all child resources.
   *
   * Will do nothing on subsequent calls.
   *
   * This method is called by `loadChildRoutes()`
   */
  public async loadChildRouteModules(): Promise<void> {
    if (this.areChildRouteModulesLoaded) {
      return;
    }

    await this.getModuleLoader().loadAllModules(this.routeConfigModuleIds);

    if (this.enableEagerLoading) {
      for (const moduleId of this.routeConfigModuleIds) {
        const resource = routerMetadata.getOwn(moduleId);
        resource.parent = this;
        if (resource.isConfigureRouter) {
          await resource.loadChildRouteModules();
        }
      }
    }
    this.areChildRouteModulesLoaded = true;
  }

  /**
   * Calls `loadChildRoutes()` to fetch the referenced modulesIds' `RouteConfig` objects, and maps them to the router.
   *
   * This method will be assigned to `target.prototype.configureRouter`, such that the routes will be configured
   * even if there is no `configureRouter()` method present.
   *
   * If `target.prototype.configureRouter` already exists, a reference to that original method will be kept
   * and called at the end of this `configureRouter()` method.
   */
  public async configureRouter(config: RouterConfiguration, router: Router): Promise<void> {
    this.isConfiguringRouter = true;
    const routes = await this.loadChildRoutes();
    config.map(routes);

    this.router = router;
    this.isRouterConfigured = true;
    this.isConfiguringRouter = false;

    const originalConfigureRouter = this.target.prototype[configureRouterSymbol] as ConfigureRouter;
    if (originalConfigureRouter !== undefined) {
      return originalConfigureRouter.call((router.container as any).viewModel, config, router);
    }
  }

  protected getSettings(instruction?: IRouteConfigInstruction | IConfigureRouterInstruction): RouterMetadataSettings {
    const settings = RouterMetadataConfiguration.INSTANCE.getSettings(this.container);
    if (instruction) {
      return overrideSettings(settings, instruction);
    }

    return settings;
  }

  protected getConfigFactory(): RouteConfigFactory {
    return RouterMetadataConfiguration.INSTANCE.getConfigFactory(this.container);
  }

  protected getModuleLoader(): IModuleLoader {
    return RouterMetadataConfiguration.INSTANCE.getModuleLoader(this.container);
  }
}

function isConfigureRouterInstruction(instruction: IRouteConfigInstruction | IConfigureRouterInstruction): boolean {
  return !!(instruction as IConfigureRouterInstruction).routeConfigModuleIds;
}

function overrideSettings(
  settings: RouterMetadataSettings,
  instruction: IRouteConfigInstruction | IConfigureRouterInstruction
): RouterMetadataSettings {
  if (isConfigureRouterInstruction(instruction)) {
    const configureInstruction = instruction as IConfigureRouterInstruction;
    if (configureInstruction.enableEagerLoading !== undefined) {
      settings.enableEagerLoading = configureInstruction.enableEagerLoading;
    }
    if (configureInstruction.filterChildRoutes !== undefined) {
      settings.filterChildRoutes = configureInstruction.filterChildRoutes;
    }
  } else {
    const routeInstruction = instruction as IRouteConfigInstruction;
    if (routeInstruction.transformRouteConfigs !== undefined) {
      settings.transformRouteConfigs = routeInstruction.transformRouteConfigs;
    }
  }

  return settings;
}

function ensureArray<T>(value: T | undefined | T[]): T[] {
  if (value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function assignOrProxyPrototypeProperty(
  proto: IRouterResourceTargetProto,
  name: string,
  refSymbol: string,
  value: any
): void {
  if (name in proto) {
    let protoOrBase = proto;
    while (!protoOrBase.hasOwnProperty(name)) {
      protoOrBase = Object.getPrototypeOf(protoOrBase);
    }
    const original = protoOrBase[name];
    proto[refSymbol] = original;
  }
  proto[name] = value;
}

// tslint:disable:no-invalid-this
async function configureRouter(config: RouterConfiguration, router: Router): Promise<void> {
  const target = Object.getPrototypeOf(this).constructor as IRouterResourceTarget;
  const resource = routerMetadata.getOwn(target);
  await resource.configureRouter(config, router);
}
// tslint:enable:no-invalid-this