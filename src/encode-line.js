const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(line) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 1;
  let str = "";
  let arr = line.split("");
  count = 1;

  for (let i = 0; i < arr.length; i++){
    count=1
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] == arr[j]) {
        count++;
        arr.splice(j, 1);
        j--;
  
      }
      else {
        break;
      }
    }
    if (count > 1) {
      str += `${count}${arr[i]}`;

    }
    else {
      str += arr[i];
    }
    arr.splice(i, 1);
    i = -1;
  }
  return str;
}

module.exports = {
  encodeLine
};