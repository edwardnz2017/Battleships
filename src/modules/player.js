const Gameboard = require('./gameboard');

const Player = () => {
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  const checkShipsPlaced = (player) => {
    if (
      playerBoard.carrier.placed &&
      playerBoard.battleship.placed &&
      playerBoard.destroyer.placed &&
      playerBoard.submarine.placed &&
      playerBoard.patrolBoat.placed
    ) {
      return true;
    }
  };

  const playerTurn = (coordinates) => {
    do {
      computerBoard.receiveAttack(coordinates);
    } while (!computerBoard.receiveAttack(coordinates));
    //check if the computer still has ships
    if (computerBoard.allSunk()) {
      return true;
    }
  };

  const autoPlay = (coordinates) => {
    do {
      playerBoard.receiveAttack(coordinates);
    } while (!playerBoard.receiveAttack(coordinates));

    if (playerBoard.allSunk()) {
      return true;
    }
  };

  const autoPlaceShips = () => {
    while (computerBoard.carrier.placed === false) {
      computerBoard.placeShip(
        computerBoard.carrier,
        getRandomInt(),
        randomOrientation(),
        'computer'
      );
    }
    while (computerBoard.battleship.placed === false) {
      computerBoard.placeShip(
        computerBoard.battleship,
        getRandomInt(),
        randomOrientation(),
        'computer'
      );
    }
    while (computerBoard.destroyer.placed === false) {
      computerBoard.placeShip(
        computerBoard.destroyer,
        getRandomInt(),
        randomOrientation(),
        'computer'
      );
    }
    while (computerBoard.submarine.placed === false) {
      computerBoard.placeShip(
        computerBoard.submarine,
        getRandomInt(),
        randomOrientation(),
        'computer'
      );
    }
    while (computerBoard.patrolBoat.placed === false) {
      computerBoard.placeShip(
        computerBoard.patrolBoat,
        getRandomInt(),
        randomOrientation(),
        'computer'
      );
    }
  };
  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(100));
  };
  const randomOrientation = () => {
    return Math.floor(Math.random() * 2) >= 1 ? 'horizontal' : 'vertical';
  };
  return {
    playerBoard,
    computerBoard,
    checkShipsPlaced,
    playerTurn,
    autoPlaceShips,
  };
};

module.exports = Player;
