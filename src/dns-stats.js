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
  const result = {};
  for (let i = 0; i <domains.length; i++) {
  let rem = '';  
  let array_reversed = domains[i].split('.').reverse();
  console.log(array_reversed)
  for (j=0; j < array_reversed.length; j++) {
    rem = rem + '.' +array_reversed[j]
    if (typeof result[rem] !== "undefined") {
      result[rem]++;
    }
    else {
      result[rem] = 1;
    }
  }
}
return result
}

module.exports = {
  getDNSStats
};
