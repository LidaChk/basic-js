const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let heights = Array.from(arr.entries()).filter(a => a[1] != -1).sort((a,b) => a[1]-b[1]).map(a => a[1] );
  let ids = Array.from(arr.entries()).filter(a => a[1] != -1).sort((a,b) => a[0]-b[0]).map(a => a[0] );
  //let idx = Array.from(arr.entries()).filter(a => a[1] == -1).sort((a,b) => a[0]-b[0]).map(a => a[0] );

  let res = Array(arr.length).fill(-1).map((el, ind) => ids.indexOf(ind) > -1 ? heights[ids.indexOf(ind)]: -1 );
  return res;
}

module.exports = {
  sortByHeight
};
