const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const N = matrix.length;

  const sumForElement = (I, J) => {
    let acc = 0;
    for (let i = I - 1; i <= I + 1; i++) {
      for (let j = J - 1; j <= J + 1; j++) {
        if (matrix[i] && matrix[i][j] && !(i == I && j == J)) acc++
      }
    }
    return acc++
  }

  let resrix = matrix.map((vector, i) => vector.map((a, j) => sumForElement(i, j)));

  return resrix;

}

module.exports = {
  minesweeper
};
