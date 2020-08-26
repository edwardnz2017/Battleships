const validPlacement = (shipName, coordinates, orientation) => {
  if (
    shipName === 'Carrier' &&
    orientation === 'vertical' &&
    coordinates >= 60
  ) {
    return false;
  } else if (
    shipName === 'Carrier' &&
    orientation === 'horizontal' &&
    ((coordinates >= 6 && coordinates <= 9) ||
      (coordinates >= 16 && coordinates <= 19) ||
      (coordinates >= 26 && coordinates <= 29) ||
      (coordinates >= 36 && coordinates <= 39) ||
      (coordinates >= 46 && coordinates <= 49) ||
      (coordinates >= 56 && coordinates <= 59) ||
      (coordinates >= 66 && coordinates <= 69) ||
      (coordinates >= 76 && coordinates <= 79) ||
      (coordinates >= 86 && coordinates <= 89) ||
      (coordinates >= 96 && coordinates <= 99))
  ) {
    return false;
  } else if (
    shipName === 'Battleship' &&
    orientation === 'vertical' &&
    coordinates >= 70
  ) {
    return false;
  } else if (
    shipName === 'Battleship' &&
    orientation === 'horizontal' &&
    ((coordinates >= 7 && coordinates <= 9) ||
      (coordinates >= 17 && coordinates <= 19) ||
      (coordinates >= 27 && coordinates <= 29) ||
      (coordinates >= 37 && coordinates <= 39) ||
      (coordinates >= 47 && coordinates <= 49) ||
      (coordinates >= 57 && coordinates <= 59) ||
      (coordinates >= 67 && coordinates <= 69) ||
      (coordinates >= 77 && coordinates <= 79) ||
      (coordinates >= 87 && coordinates <= 89) ||
      (coordinates >= 97 && coordinates <= 99))
  ) {
    return false;
  } else if (
    shipName === 'Destroyer' &&
    orientation === 'vertical' &&
    coordinates >= 80
  ) {
    return false;
  } else if (
    shipName === 'Destroyer' &&
    orientation === 'horizontal' &&
    ((coordinates >= 8 && coordinates <= 9) ||
      (coordinates >= 18 && coordinates <= 19) ||
      (coordinates >= 28 && coordinates <= 29) ||
      (coordinates >= 38 && coordinates <= 39) ||
      (coordinates >= 48 && coordinates <= 49) ||
      (coordinates >= 58 && coordinates <= 59) ||
      (coordinates >= 68 && coordinates <= 69) ||
      (coordinates >= 78 && coordinates <= 79) ||
      (coordinates >= 88 && coordinates <= 89) ||
      (coordinates >= 98 && coordinates <= 99))
  ) {
    return false;
  } else if (
    shipName === 'Submarine' &&
    orientation === 'vertical' &&
    coordinates >= 80
  ) {
    return false;
  } else if (
    shipName === 'Submarine' &&
    orientation === 'horizontal' &&
    ((coordinates >= 8 && coordinates <= 9) ||
      (coordinates >= 18 && coordinates <= 19) ||
      (coordinates >= 28 && coordinates <= 29) ||
      (coordinates >= 38 && coordinates <= 39) ||
      (coordinates >= 48 && coordinates <= 49) ||
      (coordinates >= 58 && coordinates <= 59) ||
      (coordinates >= 68 && coordinates <= 69) ||
      (coordinates >= 78 && coordinates <= 79) ||
      (coordinates >= 88 && coordinates <= 89) ||
      (coordinates >= 98 && coordinates <= 99))
  ) {
    return false;
  } else if (
    shipName === 'Patrol Boat' &&
    orientation === 'vertical' &&
    coordinates >= 90
  ) {
    return false;
  } else if (
    shipName === 'Destroyer' &&
    orientation === 'horizontal' &&
    ((coordinates >= 9 && coordinates <= 9) ||
      coordinates === 19 ||
      coordinates === 29 ||
      coordinates === 39 ||
      coordinates === 49 ||
      coordinates === 59 ||
      coordinates === 69 ||
      coordinates === 79 ||
      coordinates === 89 ||
      coordinates === 99)
  ) {
    return false;
  } else {
    return true;
  }
};

module.exports = validPlacement;
