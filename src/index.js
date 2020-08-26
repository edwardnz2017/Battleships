import Gameboard from './modules/gameboard';
import Player from './modules/player';
import Ship from './modules/ship';

const root = document.getElementById('root');
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');

const user = Player();
const computer = Player();

//load the board into the DOM
const loadBoardOne = () => {
  let index = 0;
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 10; j++) {
      const createBox = document.createElement('div');
      createBox.classList.add('gridBox');
      createBox.setAttribute('id', `${user.playerBoard.grid[index].index}`);
      createBox.addEventListener('click', (e) => {
        console.log(user.playerBoard.grid[e.srcElement.id]);
      });
      createBox.addEventListener('dragover', dragover_handler);
      createBox.addEventListener('drop', drop_handler);
      row.appendChild(createBox);
      index++;
    }
    board1.appendChild(row);
  }
};
const loadBoardTwo = () => {
  let index = 0;
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 10; j++) {
      const createBox = document.createElement('div');
      createBox.classList.add('gridBox');
      createBox.classList.add('computerGrid');
      createBox.classList.add(`${computer.computerBoard.grid[index].index}`);
      createBox.setAttribute(
        'id',
        `${computer.computerBoard.grid[index].index}`
      );
      row.appendChild(createBox);
      index++;
    }
    board2.appendChild(row);
  }
};

//place ships
const shipContainer = document.getElementById('rendered-ships');
const carrierTemplate = document.createElement('div');
const battleshipTemplate = document.createElement('div');
const destroyerTemplate = document.createElement('div');
const submarineTemplate = document.createElement('div');
const patrolBoatTemplate = document.createElement('div');
shipContainer.innerText =
  'Place your ships,\n double click to change orientation.';
const loadShips = () => {
  //carrier
  carrierTemplate.setAttribute('draggable', true);
  carrierTemplate.setAttribute('id', 'carrier');
  for (let i = 0; i < user.playerBoard.carrier.length; i++) {
    const createBox = document.createElement('div');
    createBox.classList.add('carrier');
    createBox.classList.add(`box${i}`);
    carrierTemplate.appendChild(createBox);
  }
  carrierTemplate.addEventListener('dragstart', dragstart_handler);
  carrierTemplate.addEventListener('dblclick', () => {
    carrierTemplate.classList.toggle('toggleDirection');
  });
  shipContainer.appendChild(carrierTemplate);

  //battleship
  battleshipTemplate.setAttribute('draggable', true);
  battleshipTemplate.setAttribute('id', 'battleship');
  for (let i = 0; i < user.playerBoard.battleship.length; i++) {
    const createBox = document.createElement('div');
    createBox.classList.add('battleship');
    createBox.classList.add(`box${i}`);
    battleshipTemplate.appendChild(createBox);
  }
  battleshipTemplate.addEventListener('dragstart', dragstart_handler);
  battleshipTemplate.addEventListener('dblclick', () => {
    battleshipTemplate.classList.toggle('toggleDirection');
  });
  shipContainer.appendChild(battleshipTemplate);

  //destroyer
  destroyerTemplate.setAttribute('draggable', true);
  destroyerTemplate.setAttribute('id', 'destroyer');
  for (let i = 0; i < user.playerBoard.destroyer.length; i++) {
    const createBox = document.createElement('div');
    createBox.classList.add('destroyer');
    createBox.classList.add(`box${i}`);
    destroyerTemplate.appendChild(createBox);
  }
  destroyerTemplate.addEventListener('dragstart', dragstart_handler);
  destroyerTemplate.addEventListener('dblclick', () => {
    destroyerTemplate.classList.toggle('toggleDirection');
  });
  shipContainer.appendChild(destroyerTemplate);

  //submarine
  submarineTemplate.setAttribute('draggable', true);
  submarineTemplate.setAttribute('id', 'submarine');
  for (let i = 0; i < user.playerBoard.submarine.length; i++) {
    const createBox = document.createElement('div');
    createBox.classList.add('submarine');
    createBox.classList.add(`box${i}`);
    submarineTemplate.appendChild(createBox);
  }
  submarineTemplate.addEventListener('dragstart', dragstart_handler);
  submarineTemplate.addEventListener('dblclick', () => {
    submarineTemplate.classList.toggle('toggleDirection');
  });
  shipContainer.appendChild(submarineTemplate);

  //patrol boat
  patrolBoatTemplate.setAttribute('draggable', true);
  patrolBoatTemplate.setAttribute('id', 'patrolBoat');
  for (let i = 0; i < user.playerBoard.patrolBoat.length; i++) {
    const createBox = document.createElement('div');
    createBox.classList.add('patrolBoat');
    createBox.classList.add(`box${i}`);
    patrolBoatTemplate.appendChild(createBox);
  }
  patrolBoatTemplate.addEventListener('dragstart', dragstart_handler);
  patrolBoatTemplate.addEventListener('dblclick', () => {
    patrolBoatTemplate.classList.toggle('toggleDirection');
  });
  shipContainer.appendChild(patrolBoatTemplate);
};

//drop functions
function dragstart_handler(ev) {
  ev.dataTransfer.setData('shipID', ev.target.id);
  ev.dataTransfer.dropEffect = 'move';
}

function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
}

function drop_handler(ev) {
  ev.preventDefault();
  const coordinates = ev.srcElement.id;
  let name = ev.dataTransfer.getData('shipID');
  if (name === 'patrolBoat') {
    user.playerBoard.placeShip(
      user.playerBoard.patrolBoat,
      coordinates,
      decideDirection(name),
      'user'
    );
    if (user.playerBoard.patrolBoat.placed) {
      shipContainer.removeChild(patrolBoatTemplate);
    }
    if (user.checkShipsPlaced()) {
      computer.autoPlaceShips();
      gridAttackable();
      shipContainer.innerText =
        'All ships placed! \n Computer ships placed! \n click a square to attack!';
    }
  } else if (name === 'submarine') {
    user.playerBoard.placeShip(
      user.playerBoard.submarine,
      coordinates,
      decideDirection(name),
      'user'
    );
    if (user.playerBoard.submarine.placed) {
      shipContainer.removeChild(submarineTemplate);
    }
    if (user.checkShipsPlaced()) {
      computer.autoPlaceShips();
      gridAttackable();
      shipContainer.innerText =
        'All ships placed! \n Computer ships placed! \n click a square to attack!';
    }
  } else if (name === 'destroyer') {
    user.playerBoard.placeShip(
      user.playerBoard.destroyer,
      coordinates,
      decideDirection(name),
      'user'
    );
    if (user.playerBoard.destroyer.placed) {
      shipContainer.removeChild(destroyerTemplate);
    }
    if (user.checkShipsPlaced()) {
      computer.autoPlaceShips();
      gridAttackable();
      shipContainer.innerText =
        'All ships placed! \n Computer ships placed! \n click a square to attack!';
    }
  } else if (name === 'battleship') {
    user.playerBoard.placeShip(
      user.playerBoard.battleship,
      coordinates,
      decideDirection(name),
      'user'
    );
    if (user.playerBoard.battleship.placed) {
      shipContainer.removeChild(battleshipTemplate);
    }
    if (user.checkShipsPlaced()) {
      computer.autoPlaceShips();
      gridAttackable();
      shipContainer.innerText =
        'All ships placed! \n Computer ships placed! \n click a square to attack!';
    }
  } else if (name === 'carrier') {
    user.playerBoard.placeShip(
      user.playerBoard.carrier,
      coordinates,
      decideDirection(name),
      'user'
    );
    if (user.playerBoard.carrier.placed) {
      shipContainer.removeChild(carrierTemplate);
    }
    if (user.checkShipsPlaced()) {
      computer.autoPlaceShips();
      gridAttackable();
      shipContainer.innerText =
        'All ships placed! \n Computer ships placed! \n click a square to attack!';
    }
  }
}

const decideDirection = (name) => {
  if (name === 'patrolBoat') {
    if (patrolBoatTemplate.classList.contains('toggleDirection')) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  } else if (name === 'submarine') {
    if (submarineTemplate.classList.contains('toggleDirection')) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  } else if (name === 'destroyer') {
    if (destroyerTemplate.classList.contains('toggleDirection')) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  } else if (name === 'battleship') {
    if (battleshipTemplate.classList.contains('toggleDirection')) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  } else if (name === 'carrier') {
    if (carrierTemplate.classList.contains('toggleDirection')) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  }
};
const gridAttackable = () => {
  const computerSquare = document.querySelectorAll('.computerGrid');
  computerSquare.forEach((square) => {
    square.addEventListener('click', (e) => {
      computer.computerBoard.receiveAttack(parseInt(e.srcElement.id));
      computerAttack();
    });
  });
};

const computerAttack = () => {
  user.playerBoard.receiveAttack(getRandomInt(), 'player');
};

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

document.addEventListener('DOMContentLoaded', () => {
  loadBoardOne();
  loadBoardTwo();
  loadShips();

  const draggableBox = document.querySelectorAll('.box0');
  draggableBox.forEach((box) => {
    box.innerText = 'Drag Here';
  });
});

//NEXT, IMPLEMENT A removeEventListener in the allsunk() function to stop the game once over
