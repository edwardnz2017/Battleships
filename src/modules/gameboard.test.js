const Gameboard = require('./gameboard');

/*test('BB Placed', () => {
  const playerBoard = Gameboard();
  playerBoard.placeShip(playerBoard.battleship, 10, 'horizontal');

  expect(playerBoard.grid).toEqual([
    { index: 10, coordinates: 'B1', hitStatus: false, hasShip: true },
    { index: 20, coordinates: 'C1', hitStatus: false, hasShip: true },
    { index: 30, coordinates: 'D1', hitStatus: false, hasShip: true },
    { index: 40, coordinates: 'E1', hitStatus: false, hasShip: true },
  ]);
});*/

test('valid placement', () => {
  const playerBoard = Gameboard();
  playerBoard.placeShip(playerBoard.patrolBoat, 0, 'vertical');

  expect(playerBoard.grid).toEqual(true);
});

/*test('Ship Placed True', () => {
  const playerBoard = Gameboard();
  playerBoard.placeShip(playerBoard.destroyer, 0, 'vertical');

  expect(playerBoard.grid).toEqual(true);
});
*/
