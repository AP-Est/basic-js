const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArray = arr.slice(0);
  resultArray.sort(function(a, b){return  a - b}); 
  while (resultArray[0] == -1) {
    resultArray.shift()
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      resultArray.splice(i,0,-1)
    }
  }
  return resultArray
  }
module.exports = {
  sortByHeight
};
