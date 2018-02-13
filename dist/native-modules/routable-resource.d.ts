import { RouteConfig } from "aurelia-router";
export declare class RoutableResource {
    static routableResourceMetadataKey: string;
    routes: RouteConfig[];
    moduleId: string;
    target: Function;
    loadChildRoutes: () => Promise<RouteConfig[]>;
    childRoutes: RouteConfig[];
    static getTarget(moduleId: string): Function | undefined;
    static setTarget(moduleId: string, target: Function): void;
}
