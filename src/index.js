function getPINs(observedPin) {
  const pinPad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [null, 0, null]];

  // Convert input into array of numbers
  const inputNums = observedPin.split("").map(num => parseInt(num));

  // Generate possible numbers from the pin pad
  const allPossibleNums = inputNums.map(num => findPossibleNums(num, pinPad));

  // Calculate permutations of the possible numbers
  console.log(allPossibleNums);
}

function findNumRowAndIndex(num, pinPad) {
  const row = pinPad.findIndex(row => row.includes(num));
  const index = pinPad[row].indexOf(num);

  return [row, index];
}

function findPossibleNums(num, pinPad) {
  // Find current row and index for the number given
  const [numRow, numIndex] = findNumRowAndIndex(num, pinPad);
  
  const movements = [
    {row: 0, idx: 0},   // Original number
    {row: -1, idx: 0},  // Go up (-1 row, same index)
    {row: 1, idx: 0},   // Go down (+1 row, same index)
    {row: 0, idx: 1},   // Go left (same row, -1 index)
    {row: 0, idx: -1}   // Go right (same row, +1 index)
  ]

  return movements.reduce((possibleNums, movement) => {
    const newRow = numRow + movement.row;
    const newIdx = numIndex + movement.idx;
    
    // Check movement is a valid adjacent position in the pin pad and not null
    if (newRow >=0 && newRow <= 2 && newIdx >= 0 && newIdx <= 2) {
      const numFromMovement = pinPad[newRow][newIdx];
      if (numFromMovement !== null) possibleNums.push(numFromMovement);
    }
    
    return possibleNums;
  }, [])
}

module.exports = getPINs;