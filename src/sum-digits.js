const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n.toString(10).split('').map(int => parseInt(int, 10))  
  if (arr.length > 1) {
    let new_n=0;
  for (let i = 0; i < arr.length; i++) {
     new_n = new_n + arr[i]; 
  } return getSumOfDigits(new_n);  
}
else {
  return Number(arr.join(''))}
}

module.exports = {
  getSumOfDigits
};
