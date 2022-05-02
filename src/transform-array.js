const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
if (!Array.isArray(array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  else {
    var arr = array.slice(0);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == "--discard-next") {
      if (arr[arr.length-1] == '--discard-next') {
        arr.splice(arr.length-1,1,"")
      }
      else {
        arr.splice(i, 2, "");
      }
      
      
    }
    else if (arr[i] == "--discard-prev") {
      if (arr[0] ==='--discard-prev') {
        arr.splice(0,1,"")
      }
      else {
        arr.splice(i-1, 2, "");
      }
    }
    else if (arr[i] == "--double-next") {
      if (arr[arr.length - 1] == "--doble-next")
      {
        arr.splice(arr.length-1,1,"")
      }
      else {
              arr.splice(i,1,arr[i+1])
      }

      
    }
    else if (arr[i] == "--double-prev") {
      if (arr[0] == "--double-prev") {
        arr.splice(0,1,"")
      }
      else {
         arr.splice(i,1,arr[i-1])
} } } }
  arr = arr.filter(n => n != "" &&n!=undefined);  
  console.log(arr)

  return arr;
}
module.exports = {
  transform
};