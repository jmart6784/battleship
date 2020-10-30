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

let p2Ship1 = ship(4, false, ["6I", "7I", "8I", "9I"]);
let p2Ship2 = ship(3, false, ["9B", "9C", "9D"]);
let p2Ship3 = ship(3, false, ["2H", "3H", "4H"]);
let p2Ship4 = ship(2, false, ["1B", "2B"]);
let p2Ship5 = ship(2, false, ["4A", "4B"]);
let p2Ship6 = ship(2, false, ["1E", "1F"]);
let p2Ship7 = ship(1, false, ["6E"]);
let p2Ship8 = ship(1, false, ["7B"]);
let p2Ship9 = ship(1, false, ["4F"]);
let p2Ship10 = ship(1, false, ["8F"]);

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
  // Add onClick function to all Player 1 tiles
  player1.tiles.forEach((tile) => {
    tile.onclick = () => {
      // HTML name tag is split with player and coordinate info
      let nameSpT = tile.name.split(" ");
      let player = nameSpT[0];
      let coord = nameSpT[1];
      let isEmpty = tile.classList[1] ? false : true;

      // if statement prevents the players from clicking on their board
      if (player1.isTurn) {
        console.log("Error: cannot attack your own board");
      } else {
        // Disable button from being pressed again
        tile.disabled = true;
        receiveAttack({ player, coord, isEmpty, tile });
      }
    };
  });

  // Add onClick function to all Player 2 tiles
  player2.tiles.forEach((tile) => {
    tile.onclick = () => {
      // HTML name tag is split with player and coordinate info
      let nameSpT = tile.name.split(" ");
      let player = nameSpT[0];
      let coord = nameSpT[1];
      let isEmpty = tile.classList[1] ? false : true;

      // if statement prevents the players from clicking on their board
      if (player2.isTurn) {
        console.log("Error: cannot attack your own board");
      } else {
        // Disable button from being pressed again
        tile.disabled = true;
        receiveAttack({ player, coord, isEmpty, tile });
      }

      // Disable button from being pressed again
      tile.disabled = true;
    };
  });

  const receiveAttack = (info) => {
    // Receives attack and determines if a ship was hit or not
    console.log("receive attack", info);

    if (info.isEmpty) {
      // On miss alternate player turn and change tile color to gray
      if (player1.isTurn) {
        player1.moves.push(info.coord);
        player1.isTurn = false;
        player2.isTurn = true;
        info.tile.style.backgroundColor = "gray";
        console.log("P1 -> P2", player1.isTurn, player2.isTurn);
      } else if (player2.isTurn) {
        player2.moves.push(info.coords);
        player1.isTurn = true;
        player2.isTurn = false;
        info.tile.style.backgroundColor = "gray";
        console.log("P2 -> P1", player2.isTurn, player1.isTurn);
      }
    } else {
      // on Hit change tile to red
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

    player2.ships.forEach((ship) => {
      ship.coords.forEach((coord) => {
        player2.tiles.forEach((tile) => {
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
