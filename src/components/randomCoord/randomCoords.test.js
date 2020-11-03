import randomCoords from "./randomCoords";
import player from "../player/player";
import randomBoard from "../randomBoard/randomBoard";

test("random coords returns a string", () => {
  let player1 = player("player1", true, ["1A"], [], [], 20);

  expect(typeof randomCoords(8, 1, player1)).toBe("string");
});
