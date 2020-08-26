const Ship = require('./ship');
const validPlacement = require('./validPlacement');

const Gameboard = () => {
  let grid = [];

  const carrier = Ship('Carrier');
  const battleship = Ship('Battleship');
  const destroyer = Ship('Destroyer');
  const submarine = Ship('Submarine');
  const patrolBoat = Ship('Patrol Boat');

  let index = 0;
  for (let i = 65; i < 75; i++) {
    for (let j = 1; j < 11; j++) {
      let gridSpace = {
        index: index,
        coordinates: String.fromCharCode(i) + j,
        hitStatus: false,
        hasShip: false,
      };
      grid.push(gridSpace);
      index++;
    }
  }

  const placeShip = (selectedShip, coordinates, orientation, whichUser) => {
    const shipName = selectedShip.shipName;
    if (validPlacement(shipName, coordinates, orientation) === false) {
      return false;
    } else if (checkHasShip(selectedShip, coordinates, orientation) === true) {
      if (whichUser === 'user') {
        alert('There is already a ship in that location');
      }
      return false;
    }
    selectedShip.placed = true;
    let gridShipLength = 0;
    let loopLength = 0;
    let i = parseInt(coordinates, 10);
    if (orientation === 'vertical') {
      while (loopLength < selectedShip.length) {
        grid[i].hasShip = true;
        grid[i].shipName = shipName;
        grid[i].shipLength = gridShipLength;
        if (whichUser === 'user') {
          const shipBox = document.getElementById(`${i}`);
          shipBox.classList.add('shipColored');
        }
        gridShipLength++;
        loopLength++;
        i += 10;
      }
    } else if (orientation === 'horizontal') {
      while (loopLength < selectedShip.length) {
        grid[i].hasShip = true;
        grid[i].shipName = shipName;
        grid[i].shipLength = gridShipLength;
        if (whichUser === 'user') {
          const shipBox = document.getElementById(`${i}`);
          shipBox.classList.add('shipColored');
        }
        gridShipLength++;
        loopLength++;
        i++;
      }
    }
  };

  const receiveAttack = (coordinates, recepient) => {
    const hitBox = document.getElementsByClassName(`${coordinates}`)[0];
    const userHitBox = document.getElementById(coordinates);
    if (grid[coordinates].hitStatus === true) {
      return;
    }
    if (grid[coordinates].hasShip === true) {
      if (grid[coordinates].shipName === 'Carrier') {
        carrier.hit(grid[coordinates].shipLength);
        if (recepient === 'player') {
          userHitBox.classList.add('hitArea');
        } else {
          hitBox.classList.add('hitArea');
        }
        grid[coordinates].hitStatus = true;
        allSunk(recepient);
      } else if (grid[coordinates].shipName === 'Battleship') {
        battleship.hit(grid[coordinates].shipLength);
        if (recepient === 'player') {
          userHitBox.classList.add('hitArea');
        } else {
          hitBox.classList.add('hitArea');
        }
        grid[coordinates].hitStatus = true;
        allSunk(recepient);
      } else if (grid[coordinates].shipName === 'Destroyer') {
        destroyer.hit(grid[coordinates].shipLength);
        if (recepient === 'player') {
          userHitBox.classList.add('hitArea');
        } else {
          hitBox.classList.add('hitArea');
        }
        grid[coordinates].hitStatus = true;
        allSunk(recepient);
      } else if (grid[coordinates].shipName === 'Submarine') {
        submarine.hit(grid[coordinates].shipLength);
        if (recepient === 'player') {
          userHitBox.classList.add('hitArea');
        } else {
          hitBox.classList.add('hitArea');
        }
        grid[coordinates].hitStatus = true;
        allSunk(recepient);
      } else if (grid[coordinates].shipName === 'Patrol Boat') {
        patrolBoat.hit(grid[coordinates].shipLength);
        if (recepient === 'player') {
          userHitBox.classList.add('hitArea');
        } else {
          hitBox.classList.add('hitArea');
        }
        grid[coordinates].hitStatus = true;
        allSunk(recepient);
      }
    } else {
      if (recepient === 'player') {
        userHitBox.classList.add('missedArea');
      } else {
        hitBox.classList.add('missedArea');
      }
      grid[coordinates].hitStatus = true;
    }
  };

  const allSunk = (recepient) => {
    if (
      carrier.isSunk() &&
      battleship.isSunk() &&
      destroyer.isSunk() &&
      submarine.isSunk() &&
      patrolBoat.isSunk()
    ) {
      if (recepient === 'player') {
        alert('You lose!');
      } else {
        alert('You win!');
      }
    } else {
      return false;
    }
  };

  const checkHasShip = (selectedShip, coordinates, orientation) => {
    let loopLength = 0;
    let i = parseInt(coordinates, 10);
    if (orientation === 'vertical') {
      while (loopLength < selectedShip.length) {
        if (grid[i].hasShip === true) {
          return true;
        }
        loopLength++;
        i += 10;
      }
    } else if (orientation === 'horizontal') {
      while (loopLength < selectedShip.length) {
        if (grid[i].hasShip === true) {
          return true;
        }
        loopLength++;
        i++;
      }
    }
  };

  return {
    grid,
    placeShip,
    receiveAttack,
    allSunk,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
  };
};

module.exports = Gameboard;
