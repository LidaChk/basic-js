const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let tailStr = str;
  let resArr = [];
  while (tailStr != '') {
    resArr.push([tailStr.length - tailStr.replace(RegExp(`${tailStr[0]}+`), '').length, tailStr[0]]);
    tailStr = tailStr.replace(RegExp(`${tailStr[0]}+`), '');
  }
  return resArr.flat(Infinity).filter(el => el != '1').join('').replace();

}

module.exports = {
  encodeLine
};
