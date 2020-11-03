import randomBoard from "./randomBoard";

test("random board returns an object", () => {
  expect(typeof randomBoard()).toBe("object");
});
