const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  
  let s3= s2;
  s1.split('').forEach( l => s3 = s3.replace(new RegExp(`[${l}]`),''));
  describe('banana:', () => s1 + s2 + s3 );
  return (s2.length - s3.length);  
}

module.exports = {
  getCommonCharacterCount
};
