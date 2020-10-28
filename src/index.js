export const ship = (length, sunk, coords) => {
  const hit = (x, y) => {
    // Mark x,y coordinate as hit only if ship is hit
  };

  return { length, sunk };
};

let ship1 = ship(4, false, []);
console.log(ship1.length, ship1.sunk);

const board = (() => {
  let moves = [];
  let allTiles = document.querySelectorAll(".board-tile");

  allTiles.forEach((tile) => {
    tile.onclick = () => {
      // HTML name tag is split with player and coordinate info
      let nameSpT = tile.name.split(" ");
      let player = nameSpT[0];
      let x = nameSpT[1].split("")[0];
      let y = nameSpT[1].split("")[1];

      moves.push({ player, x, y });
      console.log("MOOOOVES", moves);

      // Disable button from being pressed again
      tile.disabled = true;
      tile.style.backgroundColor = "gray";
    };
  });

  const placePieces = () => {
    // Place ship pieces using ship.coords array
  };

  const receiveAttack = (x, y) => {
    // Receives attack and determines if and empty spot was hit or a ship was
  };

  // Keep track of missed shots

  // Check for game over if all ships were sunk or not

  const getCoords = (x, y) => {
    console.log("coords", x, y);
  };

  return { placePieces, receiveAttack, getCoords };
})();

const player = (name, isTurn) => {
  return { name, isTurn };

  // Make A.I player that takes turns at random coords but doesnt repeat hit coordinates
};

let player1 = player("player1", true);
let player2 = player("player2", false);

const gameLoop = () => {
  // Loop game here only using existing methods
};
