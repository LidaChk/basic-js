const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  function irepeater(str, add, sep) {
        return Array((!add)? 0: add).fill((!str)? '': str).join((!sep)? '' : sep);
  }

  return irepeater(str + irepeater(options.addition, options.additionRepeatTimes, options.additionSeparator),
                     options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};
