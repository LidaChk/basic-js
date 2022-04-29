const { ServerResponse } = require('http');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  //myLog(arr);
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = arr.slice();


  arr.forEach((el, ind) => {
    switch (el) {
      case '--discard-next':
        if (ind < res.length-1) {
          res[ind+1] = null;
          res[ind] = null;
        } else {
          res[ind] = null;
        }
        break;
      case '--discard-prev':
        if (ind > 0) {
          res[ind-1] = null;
          res[ind] = null;
        } else {
          res[ind] = null;
        }
        break;
      case '--double-next':
        if (ind < res.length-1) res[ind] = res[ind+1];
        else {
          res[ind] = null;
        }
        break;
      case '--double-prev':
        if (ind > 0)  res[ind] = res[ind-1];
        else {
          res[ind] = null;
        }
        break;
    }
  })
  //myLog(res);
  return res.filter(el => el !== null);

}

module.exports = {
  transform
};


function myLog(content, flag = 'a+') {
  const fs = require('fs');
  fs.appendFile('my.log', content + '\n', { flag: 'a+' }, err => { });
}
