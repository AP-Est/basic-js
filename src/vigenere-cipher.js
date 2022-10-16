const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (stage) {
    this.stage=stage;
  }
  
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Incorrect arguments!')
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let messageArray = message.toUpperCase().split('')
    let arr1 = message.toUpperCase().replace(/[\s]/g,'').split('')
    let arr2 = key.toUpperCase().repeat(Math.ceil(arr1.length/key.length)).split('')
    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {
      if (letters.includes(arr1[i])) {
      let num_msg = letters.indexOf(arr1[i])  
      let num_key = letters.indexOf(arr2[i])  
      let resu = (num_msg + num_key) % 26      
      arr3.push(letters[resu])
      }
      else {
        arr3.push(arr1[i])
      }
    }
    for (let i = 0; i < messageArray.length; i++) {
      if (messageArray[i] == ' ') {
        arr3.splice(i, 0, ' ')
      }      
    }
    if (this.stage == false) {
      return arr3.reverse().join('')
    }
    return arr3.join('')
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Incorrect arguments!')
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let messageArray = message.toUpperCase().split('')
    let arr1 = message.toUpperCase().replace(/[\s]/g,'').split('')
    let arr2 = key.toUpperCase().repeat(Math.ceil(arr1.length/key.length)).split('')
    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {
      if (letters.includes(arr1[i])) {
      let num_msg = letters.indexOf(arr1[i])  
      let num_key = letters.indexOf(arr2[i])  
      let resu = (((num_msg - num_key) % 26) + 26) % 26     
      arr3.push(letters[resu])
      }
      else {
        arr3.push(arr1[i])
      }
    }
    for (let i = 0; i < messageArray.length; i++) {
      if (messageArray[i] == ' ') {
        arr3.splice(i, 0, ' ')
      }      
    }
    if (this.stage == false) {
      return arr3.reverse().join('')
    }
    return arr3.join('')
  }  
}

module.exports = {
  VigenereCipheringMachine
};
