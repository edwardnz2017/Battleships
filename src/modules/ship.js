const Ship = (name) => {
  let shipName = name;
  let ship = [];
  let length;
  let placed = false;

  switch (name) {
    case 'Carrier':
      length = 5;
      break;
    case 'Battleship':
      length = 4;
      break;
    case 'Destroyer':
      length = 3;
      break;
    case 'Submarine':
      length = 3;
      break;
    case 'Patrol Boat':
      length = 2;
      break;
    default:
      break;
  }

  for (let i = 0; i < length; i++) {
    let shipSpace = {
      index: i,
      hitStatus: false,
    };
    ship.push(shipSpace);
  }

  const hit = (i) => (ship[i].hitStatus = true);

  const isSunk = () => {
    let damage = ship.reduce((acc, dmg) => {
      if (dmg.hitStatus === true) {
        acc++;
      }
      return acc;
    }, 0);
    if (damage === length) {
      return true;
    }
  };

  return { shipName, ship, length, placed, hit, isSunk };
};

module.exports = Ship;
