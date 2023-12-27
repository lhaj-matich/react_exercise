import request from "supertest";
import app from "./index";

describe("Backend", () => {
  test("test if the users endpoint is up", async () => {
    return await request(app).get("/users").expect(200);
  });

  test("test if we're getting all the users from the database", async () => {
    const response: any = await request(app).get("/users");
    const usersCount = response.body.users.length;
    expect(usersCount).toBe(30);
  });

  test("test if the name filter is working correctly", async () => {
    const response = await request(app).get("/users?search=terry");
    const users = response.body.users.length;
    // I alreay know that there is only one user with the name terry.
    expect(users).toBe(1);
  });
});
