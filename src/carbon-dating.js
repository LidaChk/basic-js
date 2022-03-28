const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const BANANA = 'banana';


/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let N = parseFloat(sampleActivity);
  
  if (typeof(sampleActivity) != 'string' || !(/^[\d.]+$/.test(sampleActivity)) || N === NaN || N <=0 || N >=15 ) return false;

  let Y = Math.ceil(Math.log(MODERN_ACTIVITY / N) * HALF_LIFE_PERIOD / Math.LN2);

  return Y;
}

module.exports = {
  dateSample
};
