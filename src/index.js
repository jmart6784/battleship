import getRandomInt from "./components/getRandomInt";
import randomBoard from "./components/randomBoard";
import ship from "./components/ship";
import randomCoords from "./components/randomCoords";
import player from "./components/player";

let p1Tiles = document.querySelectorAll(".p1-board-tile");
let p2Tiles = document.querySelectorAll(".p2-board-tile");

let p1Layout = randomBoard();
let p2Layout = randomBoard();

// Change boards layouts if they are the same
while (p1Layout.id === p2Layout.id) {
  p1Layout = randomBoard();
  p2Layout = randomBoard();
}

let p1Ship1 = ship(p1Layout.ship1);
let p1Ship2 = ship(p1Layout.ship2);
let p1Ship3 = ship(p1Layout.ship3);
let p1Ship4 = ship(p1Layout.ship4);
let p1Ship5 = ship(p1Layout.ship5);
let p1Ship6 = ship(p1Layout.ship6);
let p1Ship7 = ship(p1Layout.ship7);
let p1Ship8 = ship(p1Layout.ship8);
let p1Ship9 = ship(p1Layout.ship9);
let p1Ship10 = ship(p1Layout.ship10);

let p2Ship1 = ship(p2Layout.ship1);
let p2Ship2 = ship(p2Layout.ship2);
let p2Ship3 = ship(p2Layout.ship3);
let p2Ship4 = ship(p2Layout.ship4);
let p2Ship5 = ship(p2Layout.ship5);
let p2Ship6 = ship(p2Layout.ship6);
let p2Ship7 = ship(p2Layout.ship7);
let p2Ship8 = ship(p2Layout.ship8);
let p2Ship9 = ship(p2Layout.ship9);
let p2Ship10 = ship(p2Layout.ship10);

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
  p1Tiles,
  20
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
  p2Tiles,
  20
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
      if (!player1.isTurn) {
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
      if (!player2.isTurn) {
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

    if (info.isEmpty) {
      // On miss alternate player turn and change tile color to gray
      if (player1.isTurn) {
        player1.moves.push(info.coord);
        player1.isTurn = false;
        player2.isTurn = true;
        info.tile.style.backgroundColor = "gray";

        // Get new Coordinates
        let newCoords = randomCoords(
          getRandomInt(0, 9),
          getRandomInt(0, 9),
          player2
        );

        // Get AI move information
        let obj = player2.aiMove(newCoords);

        // Receive attack on those coordinates
        receiveAttack(obj);
      } else if (player2.isTurn) {
        player2.moves.push(info.coord);

        player1.isTurn = true;
        player2.isTurn = false;
        info.tile.style.backgroundColor = "gray";
      }
    } else {
      // on Hit change tile to red
      info.tile.style.backgroundColor = "red";

      // decrement player.totalHP on hit or game over if health is 1
      if (player1.isTurn) {
        if (player2.totalHP === 1) {
          gameOver(player1.name);
        } else {
          player2.totalHP -= 1;
        }
      } else if (player2.isTurn) {
        // End game if player 1 tiles are all red
        if (getRedCount() === 20) {
          gameOver(player2.name);
        } else {
          let newCoords = randomCoords(
            getRandomInt(0, 9),
            getRandomInt(0, 9),
            player2
          );

          let obj = player2.aiMove(newCoords);

          receiveAttack(obj);
        }
      }
    }
  };

  const getRedCount = () => {
    let rCount = 0;

    p1Tiles.forEach((tile) => {
      if (tile.style.backgroundColor === "red") {
        rCount++;
      }
    });

    return rCount;
  };

  const gameOver = (winner) => {
    player1.tiles.forEach((tile) => {
      tile.disabled = true;
    });

    player2.tiles.forEach((tile) => {
      tile.disabled = true;
    });

    document.getElementById("winner-name").innerHTML =
      winner === "player1" ? "You Win!" : "Enemy has won!";
    document.getElementById("winner-popup").style.display = "block";
    document.getElementById("game-reset").addEventListener("click", () => {
      location.reload();
    });
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

  return { placePieces, receiveAttack };
})();

board.placePieces();
