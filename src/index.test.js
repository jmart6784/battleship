import { ship } from "./index";

test("ships are not sunk by default", () => {
  const ship1 = ship(4, false, []);
  expect(ship1.sunk).toBe(false);
});
