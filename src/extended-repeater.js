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
  if (typeof options.addition == 'boolean') {options.addition = String(options.addition)}
  if (str == null) {str = String(str)}
  if (options.addition == null) {options.addition = String(options.addition)}
  if (!options.separator) {  options.separator = '+'}
  if (!options.additionSeparator) {  options.additionSeparator = '|'}
  if (options.addition == 'undefined') {  options.addition = ''}
  let add = options.addition
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    add = add + options.additionSeparator + options.addition
  }
  let padd = str + add
  let final = padd
  for (let i = 1; i < options.repeatTimes; i++) {
    final = final + options.separator + padd
  }
  
  return final
  }

module.exports = {
  repeater
};
