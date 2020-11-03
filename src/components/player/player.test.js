import player from "./player";
import ship from "../ship/ship";

test("Player returns name", () => {
  let player1 = player("player1", true, [], [], [], 20);

  expect(player1.name).toBe("player1");
});

test("Player 1 turn is set to true by default", () => {
  let player1 = player("player1", true, [], [], [], 20);

  expect(player1.isTurn).toBe(true);
});

test("Player 1 moves array to be empty", () => {
  let player1 = player("player1", true, [], [], [], 20);

  expect(player1.moves.length).toBe(0);
});

test("Player 1 ships array length should be 10", () => {
  let p1Ship1 = ship([]);
  let p1Ship2 = ship([]);
  let p1Ship3 = ship([]);
  let p1Ship4 = ship([]);
  let p1Ship5 = ship([]);
  let p1Ship6 = ship([]);
  let p1Ship7 = ship([]);
  let p1Ship8 = ship([]);
  let p1Ship9 = ship([]);
  let p1Ship10 = ship([]);

  let player1 = player(
    "player1",
    true,
    [],
    [
      p1Ship1,
      p1Ship2,
      p1Ship3,
      p1Ship4,
      p1Ship5,
      p1Ship6,
      p1Ship7,
      p1Ship8,
      p1Ship9,
      p1Ship10,
    ],
    [],
    20
  );

  expect(player1.ships.length).toBe(10);
});

test("Player 1 total hp is 20", () => {
  let player1 = player("player1", true, [], [], [], 20);

  expect(player1.totalHP).toBe(20);
});
