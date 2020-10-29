import { ship, board } from "./index";

test("ships are not sunk by default", () => {
  const ship1 = ship(4, false, []);
  expect(ship1.sunk).toBe(false);
});

test("ship1 length is 4", () => {
  const ship1 = ship(4, false, []);
  expect(ship1.length).toBe(4);
});
