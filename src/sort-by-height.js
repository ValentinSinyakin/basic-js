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
function sortByHeight(array) {
    let arr = [];
  for (let i = 0; i < array.length; i++){
    if (array.indexOf(-1, arr[arr.length - 1] + 1) == -1) {
      break
    }
    arr.push(array.indexOf(-1, arr[arr.length-1] + 1));
    

  }
  let arr1 = array.filter(n => n != -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++){
    arr1.splice(arr[i], 0, -1);
  }
  return arr1;
}

module.exports = {
  sortByHeight
};