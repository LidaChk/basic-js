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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  myLog(date);
  
  try {

    //if (!date) return ('Unable to determine the time of year!');

    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    myLog('banana: ' + date.getMonth() + ' ' + Math.abs((date.getMonth() - 11) / 3));
    return seasons[(Math.floor((date.getMonth() - 1) / 3))];
  }
  catch(e) {
    myLog(e);
    throw ('Invalid date!')
  }
}

function myLog(content) {
  const fs = require('fs');
    fs.appendFile('my.log', content + '\n', { flag: 'a+' }, err => {});
}

module.exports = {
  getSeason
};
