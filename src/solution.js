function getPINs(observed) {
  const adjacentDigits = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
  };

  let pins = adjacentDigits[observed[0]] || [];
  
  for (let i = 1; i < observed.length; i++) {
    const adjacent = adjacentDigits[observed[i]];
    let newPins = [];

    for (let j = 0; j < pins.length; j++) {
      for (let k = 0; k < adjacent.length; k++) {
        newPins.push(pins[j] + adjacent[k]);
      }
    }
    pins = newPins;
  }

  return [...new Set(pins)];
}

module.exports = getPINs
