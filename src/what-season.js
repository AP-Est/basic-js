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
  if (date == undefined) {
    return 'Unable to determine the time of year!';     
  }
  if (date.hasOwnProperty('toString') || !(date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date))) {
    throw new Error ('Invalid date!')
  } 
  const month = date.getMonth() + 1;
  if (month == 5 || month == 3 || month == 4) {
    return 'spring';
  }
  if (month == 8 || month == 6 || month == 7) {
    return 'summer';
  }
  if (month == 9 || month == 10 || month == 11) {
    return 'fall';
  }
  if (month == 2 || month == 1 || month == 12) {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
