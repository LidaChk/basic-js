const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0;

  for (let i = 0; i < (n + '').length; i++) {
    let newRes = parseInt((n + '').slice(0, i) + (n + '').slice(i + 1));
    res = (newRes > res) ? newRes : res;
  }
  return res;
}

module.exports = {
  deleteDigit
};
