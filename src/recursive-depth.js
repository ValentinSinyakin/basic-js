const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   constructor(){
  
  }
  calculateDepth(array) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let stack = [];
    if (array.length ==0) {
      return 1;
    }
    array.forEach(element => {
      let count = 1;
      if (Array.isArray(element)) {
        count+=this.calculateDepth(element)
      }
      stack.push(count);
    }); 
    let maxNumber = Math.max(...stack);
    return maxNumber;
  }
}

module.exports = {
  DepthCalculator
};