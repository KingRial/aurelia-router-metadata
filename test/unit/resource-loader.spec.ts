import { Registry } from "@src/registry";
import { ResourceLoader } from "@src/resource-loader";
import { LoaderMock, PlatformMock, RouterMetadataMock } from "./mocks";

// tslint:disable:function-name
// tslint:disable:max-classes-per-file
// tslint:disable:no-empty
// tslint:disable:no-unnecessary-class
// tslint:disable:variable-name

describe("resourceLoader", () => {
  let validSingleDummy: {
    moduleId: string;
    target: Function;
  };
  let validMultiDummy: {
    moduleId: string;
    target: { [name: string]: Function };
  };
  let invalidDummy: {
    moduleId: string;
    target: Object;
  };

  let registry: Registry;
  let routerMetadataMock: RouterMetadataMock;
  let platformMock: PlatformMock;
  let loaderMock: LoaderMock;

  let sut: ResourceLoader;

  beforeEach(() => {
    validSingleDummy = {
      moduleId: "some/valid/single/module",
      target: new Function()
    };
    validMultiDummy = {
      moduleId: "some/valid/multi/module",
      target: {
        one: new Function(),
        two: new Function()
      }
    };
    invalidDummy = {
      moduleId: "some/invalid/module",
      target: new Object()
    };

    registry = new Registry();
    routerMetadataMock = new RouterMetadataMock().activate();
    platformMock = new PlatformMock().activate();
    loaderMock = new LoaderMock()
      .activate()
      .link(platformMock)
      .add(validSingleDummy.moduleId, validSingleDummy.target)
      .add(validMultiDummy.moduleId, validMultiDummy.target)
      .add(invalidDummy.moduleId, invalidDummy.target);

    sut = new ResourceLoader(loaderMock as any, registry);
  });

  afterEach(() => {
    routerMetadataMock.deactivate();
    platformMock.deactivate();
    loaderMock.deactivate();
  });

  describe("loadRouterResource()", () => {
    it("should throw if the moduleId does not export any function", async () => {
      let error;
      try {
        await sut.loadRouterResource(invalidDummy.moduleId);
      } catch (err) {
        error = err;
      }

      expect(error).toBeDefined();
    });

    it("should return a RouterResource if the moduleId exports a default function", async () => {
      const result = await sut.loadRouterResource(validSingleDummy.moduleId);

      expect(result.target).toBe(validSingleDummy.target);
    });

    it("should return a RouterResource if the moduleId exports a multiple named functions", async () => {
      const result = await sut.loadRouterResource(validMultiDummy.moduleId);

      expect(result.target).toBe(validMultiDummy.target.one);
    });
  });
});
