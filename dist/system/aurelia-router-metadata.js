System.register(["./aurelia-router-metadata", "./decorators", "./resource-loader", "./router-resource", "./route-config-factory", "./router-metadata-configuration", "./router-metadata"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(fxconfig, configureSettings) {
        const settings = new aurelia_router_metadata_1.RouterMetadataSettings();
        if (typeof configureSettings === "function") {
            configureSettings(settings);
        }
        const container = fxconfig.container;
        const config = new aurelia_router_metadata_1.RouterMetadataConfiguration(container);
        aurelia_router_metadata_1.RouterMetadataConfiguration.INSTANCE = config;
        container.registerInstance(aurelia_router_metadata_1.RouterMetadataSettings, settings);
        container.registerInstance(aurelia_router_metadata_1.RouterMetadataConfiguration, config);
    }
    exports_1("configure", configure);
    var aurelia_router_metadata_1;
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (aurelia_router_metadata_1_1) {
                aurelia_router_metadata_1 = aurelia_router_metadata_1_1;
            },
            function (decorators_1_1) {
                exportStar_1(decorators_1_1);
            },
            function (resource_loader_1_1) {
                exportStar_1(resource_loader_1_1);
            },
            function (router_resource_1_1) {
                exportStar_1(router_resource_1_1);
            },
            function (route_config_factory_1_1) {
                exportStar_1(route_config_factory_1_1);
            },
            function (router_metadata_configuration_1_1) {
                exportStar_1(router_metadata_configuration_1_1);
            },
            function (router_metadata_1_1) {
                exportStar_1(router_metadata_1_1);
            }
        ],
        execute: function () {
        }
    };
});
