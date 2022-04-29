const { throws } = require('assert');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  try {

    if (!date) return ('Unable to determine the time of year!');
    if (!(date instanceof Date && !isNaN(date.valueOf()))) throw new Error('Invalid date!');

    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    let id = Math.floor((date.getMonth() + 1) / 3) % 4;

    return seasons[id];
  }
  catch (e) {
    throw new Error('Invalid date!');
  }
}

function myLog(content, flag = 'a+') {
  const fs = require('fs');
  fs.appendFile('my.log', content + '\n', { flag: 'a+' }, err => { });
}

module.exports = {
  getSeason
};
