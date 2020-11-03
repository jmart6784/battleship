import getRandomInt from "./getRandomInt";

test("get random integer is bigger than -1", () => {
  expect(getRandomInt(0, 9) >= 0).toBe(true);
});

test("get random integer is less than 10", () => {
  expect(getRandomInt(0, 9) <= 10).toBe(true);
});
