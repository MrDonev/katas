const findConnectFourWinner = (matrix) => {
  if (matrix === undefined || matrix.length === 0) return 'false';
  const matrixArr = [];
  matrix.forEach((element) => matrixArr.push([...element]));
  //horizontal check
  for (const row of matrixArr) {
    if (row.filter((element) => element === 'x').length === 4) {
      return 'x';
    }
    if (row.filter((element) => element === 'o').length === 4) {
      return 'o';
    }
  }
  //vertical check
  for (let col = 0; col <= matrixArr.length + 1; col++) {
    const vertical = [];
    for (let row = 0; row < matrixArr.length; row++) {
      const element = matrixArr[row][col];
      vertical.push(element);
    }
    if (vertical.filter((element) => element === 'x').length === 4) {
      return 'x';
    }
    if (vertical.filter((element) => element === 'o').length === 4) {
      return 'o';
    }
  }
  //diagonal check
  //left to right
  for (let row = 0; row < matrixArr.length-3; row++) {
    const diagonal = [];
    for (let col = 0; col < matrixArr[row].length -3; col++) {
      const element = matrixArr[row][col];
      if ( element ==='x' || element ==='o' &&
        element == matrix[row + 1][col + 1] &&
        element == matrix[row + 2][col + 2] &&
        element == matrix[row + 3][col + 3]
      ) {
        return element;
      }
    }
  }
  //right to left
  for (let row = 0; row < matrixArr.length-3; row++) {
    const diagonal = [];
    for (let col = matrixArr[row].length -3; col < matrixArr[row].length; col++) {
      const element = matrixArr[row][col];
      if ( element ==='x' || element ==='o' &&
        element == matrix[row + 1][col + 1] &&
        element == matrix[row + 2][col + 2] &&
        element == matrix[row + 3][col + 3]
      ) {
        return element;
      }
    }
  }
  return 'false';
};

module.exports = findConnectFourWinner;
