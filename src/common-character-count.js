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
  let count = 0;
  let s1_array = s1.split(''); 
  let s2_array = s2.split(''); 
  while (s1_array.length > 0 ) {
    let separate_letter_s1 = String(s1_array.splice(0,1))
      if (s2_array.includes(separate_letter_s1)) {
        let index = s2_array.indexOf (separate_letter_s1);
        delete s2_array[index];
        count++
      }
  }
return count;
}

module.exports = {
  getCommonCharacterCount
};
