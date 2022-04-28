const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  res = {};
  domains.forEach(d => {

    let arr = d.split('.');

    for (let i = arr.length - 1; i >= 0; i--) {

      let domain = '';

      for (let j = arr.length-1; j >=i; j--) {
        domain = domain + '.' + arr[j];
      } 
      if (!res[domain]) {
        res[domain] = 1;
      } else {
        res[domain] += 1;
      }
    }
  })
  return (res);
}

module.exports = {
  getDNSStats
};
