import getRandomInt from "../getRandomInt/getRandomInt";

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

export default randomCoords;
