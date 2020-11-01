let p1Tiles = document.querySelectorAll(".p1-board-tile");
let p2Tiles = document.querySelectorAll(".p2-board-tile");

export const ship = (coords) => {
  return { coords };
};

let p1Ship1 = ship(["1A", "1B", "1C", "1D"]);
let p1Ship2 = ship(["3A", "3B", "3C"]);
let p1Ship3 = ship(["5A", "5B", "5C"]);
let p1Ship4 = ship(["7A", "7B"]);
let p1Ship5 = ship(["9A", "9B"]);
let p1Ship6 = ship(["2I", "2J"]);
let p1Ship7 = ship(["4J"]);
let p1Ship8 = ship(["6J"]);
let p1Ship9 = ship(["8J"]);
let p1Ship10 = ship(["10J"]);

let p2Ship1 = ship(["6I", "7I", "8I", "9I"]);
let p2Ship2 = ship(["9B", "9C", "9D"]);
let p2Ship3 = ship(["2H", "3H", "4H"]);
let p2Ship4 = ship(["1B", "2B"]);
let p2Ship5 = ship(["4A", "4B"]);
let p2Ship6 = ship(["1E", "1F"]);
let p2Ship7 = ship(["6E"]);
let p2Ship8 = ship(["7B"]);
let p2Ship9 = ship(["4F"]);
let p2Ship10 = ship(["8F"]);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomCoords = (randNum1, randNum2, player) => {
  let x = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let y = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  let coord = x[randNum1] + y[randNum2];

  // Check Player moves if the coordinate was already used
  if (player.moves.includes(coord)) {
    // Generate new unique coordinate that has not been used
    while (player.moves.includes(coord)) {
      coord = x[getRandomInt(0, 9)] + y[getRandomInt(0, 9)];
    }

    return coord;
  } else {
    return coord;
  }
};

const player = (name, isTurn, moves, ships, tiles, totalHP) => {
  const aiMove = (coord) => {
    let tile = document.querySelector(`[name="player1 ${coord}"]`);
    // Get info from tile
    let nameSpT = tile.name.split(" ");
    let player = nameSpT[0];
    let isEmpty = tile.classList[1] ? false : true;
    return { player, coord, isEmpty, tile };
  };

  return {
    name,
    isTurn,
    moves,
    ships,
    tiles,
    totalHP,
    aiMove: aiMove,
  };
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
        if (player1.totalHP === 1) {
          gameOver(player2.name);
        } else {
          let newCoords = randomCoords(
            getRandomInt(0, 9),
            getRandomInt(0, 9),
            player2
          );

          let obj = player2.aiMove(newCoords);

          receiveAttack(obj);

          console.log("BEFORE HIT:", player1.totalHP);
          player1.totalHP -= 1;
          console.log("AFTER HIT:", player1.totalHP);
        }
      }
    }
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
