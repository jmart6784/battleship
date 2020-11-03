import { board } from "./index";

test("Number of red tiles on start for player 1 is  0", () => {
  expect(board.getRedCount()).toBe(0);
});
