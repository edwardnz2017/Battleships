const Ship = require('./ship');

test('ship length PB', () => {
  let mockPB = Ship('Patrol Boat');

  expect(mockPB.length).toBe(2);
});

test('ship length CV', () => {
  let mockCV = Ship('Carrier');

  expect(mockCV.length).toBe(5);
});

test('sunk', () => {
  let mockPB = Ship('Patrol Boat');
  mockPB.hit(0);
  mockPB.hit(1);
  expect(mockPB.isSunk()).toEqual(true);
});

test('hit DD', () => {
  let mockDD = Ship('Destroyer');
  mockDD.hit(2);
  expect(mockDD.ship).toEqual([
    { index: 0, hitStatus: false },
    { index: 1, hitStatus: false },
    { index: 2, hitStatus: true },
  ]);
});
