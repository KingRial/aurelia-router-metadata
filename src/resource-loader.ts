import { IResourceLoader } from "@src/interfaces";
import { $Module } from "@src/model";
import { Registry } from "@src/registry";
import { routerMetadata } from "@src/router-metadata";
import { RouterResource } from "@src/router-resource";
import { Loader } from "aurelia-loader";

export class ResourceLoader implements IResourceLoader {
  private loader: Loader;
  private registry: Registry;

  constructor(loader: Loader, registry: Registry) {
    this.loader = loader;
    this.registry = registry;
  }

  public async loadRouterResource(moduleId: string): Promise<RouterResource> {
    const $module = await this.loadModule(moduleId);

    if (!$module.$defaultExport) {
      throw new Error(`Unable to resolve RouterResource for ${$module.moduleId}.
            Module appears to have no exported classes.`);
    }

    const resource = routerMetadata.getOrCreateOwn($module.$defaultExport.$constructor.raw, $module.moduleId);

    // The decorators don't have access to their own module in aurelia-cli projects,
    // so we set the moduleId now (only used by @routeConfig resources)
    resource.moduleId = $module.moduleId;

    resource.$module = $module;

    return resource;
  }

  public async loadModule(normalizedId: string): Promise<$Module> {
    let $module = this.registry.getModule(normalizedId);
    if ($module === undefined) {
      const moduleInstance = await this.loader.loadModule(normalizedId);
      $module = this.registry.registerModule(moduleInstance, normalizedId);
    }

    return $module;
  }
}
