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

export default player;
