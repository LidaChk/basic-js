const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */



const chainMaker = {

  chain: [],
  getLength: function () {
    return this.chain.length;
  },
  addLink: function (value) {
    this.chain.push('( ' + value + ' )');
    return this;

  },
  removeLink: function (position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.finishChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.chain.reverse();
    return this;
  },
  finishChain: function () {
    let res = (!this.chain[0]) ? '' : this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return res;
  }
};

module.exports = {
  chainMaker
};
