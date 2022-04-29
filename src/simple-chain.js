const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */



const chainMaker = {
  constructor() {
    this.chain = [];
  },
  getLength() {
    if (!this.chain) this.chain = [];
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) this.chain = [];
    this.chain.push('( ' + value + ' )');
    return this;

  },
  removeLink(position) {
    if (!this.chain) this.chain = [];
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.finishChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (!this.chain) this.chain = [];
    this.chain.reverse();
    return this;
  },
  finishChain() {
    if (!this.chain) this.chain = [];
    let res = (!this.chain[0]) ? '' : this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return res;
  }
};

module.exports = {
  chainMaker
};
