const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    return this.chains.length;
  },
  addLink( value ) {
    value += ''
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if ( position >this.chains.length ||position <= 0||!Number.isInteger(position) ||typeof(position) != 'number')
   {
      this.chains = [];
      throw new Error(`You can't remove incorrect link!`);
    } 
    else {
      this.chains.splice(position-1, 1);
    return this;
    }
    
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chains.map(element=> {
       return`( ${element} )`
    });
    this.chains= []
    return arr.join('~~');
  },
  chains: [],
};

module.exports = {
  chainMaker
};