const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  rev: false,
  _reset() {
    this.chain = []
    this.rev = false
  },
  getLength() {
    return this.chain.length
  },  
  addLink(x) {
    if (this.rev) {
      this.chain.unshift(x)
    } else {
      this.chain.push(x)  
    }
    return this
  },  
  removeLink(pos) {
    if (!Number.isInteger(pos)) {
      this._reset()
      throw new Error("You can't remove incorrect link!")
    }    
    pos--;
    if (pos < 0 || pos >= this.chain.length) {
      this._reset()
      throw new Error("You can't remove incorrect link!")
    }
    let index = this.rev ? this.chain.length - pos - 1: pos
    this.chain.splice(index, 1)
    return this
  },
  reverseChain() {
    this.rev = !this.rev;
    return this
  },  
  finishChain() {
    if (this.rev) {
      this.chain.reverse()
    }
    let endChain = this.chain.map(x => `( ${x} )`).join("~~")
    this._reset()
    return endChain
  }
};

module.exports = {
  chainMaker
};
