const db = require("../database/dbConfig.js");

const user = require("./auth-model.js");

describe("user model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("register", () => {
    it("should register new user to the database", async () => {
      await user.register({
        username: "testusername1",
        password: "testpassword1"
      });
      await user.register({
        username: "testusername2",
        password: "testpassword2"
      });
      await user.register({
        username: "testusername3",
        password: "testpassword3"
      });
      const users = await db("users");
      expect(users).toHaveLength(3);
    });
    it("should login the provided user to the database", async () => {
      let newUser = await user.register({ username: "jay", password: "jay" });
      expect(newUser.username).toBe("jay");

      newUser = await user.register({ username: "may", password: "may" });
      expect(newUser.username).toBe("may");

      let loginUser = await user.login("jay");
      console.log(loginUser);
      expect(loginUser.username).toBe("jay");
    });
  });
});
