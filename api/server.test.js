const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it(`should return a "last sprint challenge" fron the index route`, async () => {
      const response = await request(server).get("/");

      expect(response.body.message).toMatch(/last sprint challenge/i);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  });
  describe("joke router", () => {
    it("should return an 400 status code from the index route", async () => {
      const expectedStatusCode = 400;
      const response = await request(server).get("/api/jokes");

      expect(response.status).toEqual(expectedStatusCode);
    });
    it("should return no Credentail Provided code from the joke route", async () => {
      const response = await request(server).get("/api/jokes");

      expect(response.body.message).toMatch(/No credentials provided/i);
    });
  });
});
