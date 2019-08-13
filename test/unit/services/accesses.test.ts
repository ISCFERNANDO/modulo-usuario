import { inject, TestContext, bootstrap } from "@tsed/testing";
import { expect } from "chai";
import { ExpressApplication } from "@tsed/common";
import * as SuperTest from "supertest";
import { Server } from "../../../src/server";

describe("API REST", () => {
  // bootstrap your Server to load all endpoints before run your test
  let request: SuperTest.SuperTest<SuperTest.Test>;
  before(bootstrap(Server));
  before(
    inject([ExpressApplication], (expressApplication: ExpressApplication) => {
      request = SuperTest(expressApplication);
    })
  );

  after(TestContext.reset);

  describe("GET /api/v1/accesses", () => {
    it("should do something", async () => {
      const response = await request.get("/api/v1/accesses").expect(200);
      console.log(response.body);
      expect(response.body.data).to.be.an("array");
    });
  });
});
