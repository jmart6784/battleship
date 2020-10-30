let p1Tiles = document.querySelectorAll(".p1-board-tile");
let p2Tiles = document.querySelectorAll(".p2-board-tile");
let moves = [];

export const ship = (length, sunk, coords) => {
  const hit = (x, y) => {
    // Mark x,y coordinate as hit only if ship is hit
  };

  return { length, sunk, coords, hit };
};

let p1Ship1 = ship(4, false, ["1A", "1B", "1C", "1D"]);
let p1Ship2 = ship(3, false, ["3A", "3B", "3C"]);
let p1Ship3 = ship(3, false, ["5A", "5B", "5C"]);
let p1Ship4 = ship(2, false, ["7A", "7B"]);
let p1Ship5 = ship(2, false, ["9A", "9B"]);
let p1Ship6 = ship(2, false, ["2I", "2J"]);
let p1Ship7 = ship(1, false, ["4J"]);
let p1Ship8 = ship(1, false, ["6J"]);
let p1Ship9 = ship(1, false, ["8J"]);
let p1Ship10 = ship(1, false, ["10J"]);

let p2Ship1 = ship(4, false, []);
let p2Ship2 = ship(3, false, []);
let p2Ship3 = ship(3, false, []);
let p2Ship4 = ship(2, false, []);
let p2Ship5 = ship(2, false, []);
let p2Ship6 = ship(2, false, []);
let p2Ship7 = ship(1, false, []);
let p2Ship8 = ship(1, false, []);
let p2Ship9 = ship(1, false, []);
let p2Ship10 = ship(1, false, []);

const player = (name, isTurn, moves, ships, tiles) => {
  return { name, isTurn, moves, ships, tiles };

  // Make A.I player that takes turns at random coords but doesn't repeat hit coordinates
};

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
  p1Tiles
);
let player2 = player(
  "player2",
  false,
  [],
  [
    p2Ship1,
    p2Ship2,
    p2Ship3,
    p2Ship4,
    p2Ship5,
    p2Ship6,
    p2Ship7,
    p2Ship8,
    p2Ship9,
    p2Ship10,
  ],
  p2Tiles
);

export const board = (() => {
  player1.tiles.forEach((tile) => {
    tile.onclick = () => {
      // HTML name tag is split with player and coordinate info
      let nameSpT = tile.name.split(" ");
      let player = nameSpT[0];
      let x = nameSpT[1].split("")[0];
      let y = nameSpT[1].split("")[1];
      let isEmpty = tile.classList[1] ? false : true;

      receiveAttack({ player, x, y, isEmpty, tile });

      // Disable button from being pressed again
      tile.disabled = true;
    };
  });

  const receiveAttack = (info) => {
    // Receives attack and determines if and empty spot was hit or a ship was
    console.log("receive attack", info);

    if (info.isEmpty) {
      console.log("EMPTY ATTACK");
      info.tile.style.backgroundColor = "gray";
    } else {
      console.log("HIT DETECTED");
      info.tile.style.backgroundColor = "red";
    }
  };

  const placePieces = () => {
    // Place ship pieces using ship.coords array
    player1.ships.forEach((ship) => {
      ship.coords.forEach((coord) => {
        player1.tiles.forEach((tile) => {
          if (tile.name.split(" ")[1] === coord) {
            tile.style.backgroundColor = "blue";
            tile.classList += " occupied";
          }
        });
      });
    });
  };

  // Keep track of missed shots

  // Check for game over if all ships were sunk or not

  const getCoords = (x, y) => {
    console.log("coords", x, y);
  };

  return { placePieces, receiveAttack, getCoords };
})();

const gameLoop = () => {
  // Loop game here only using existing methods
  board.placePieces();
};

gameLoop();
