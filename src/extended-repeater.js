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
function overWrite(obj) {
    obj.repeatTimes = obj.repeatTimes|| 1;
    obj.separator = obj.separator || "+";
    obj.addition = obj.addition === undefined ? '' : String(obj.addition);
    obj.additionRepeatTimes = obj.additionRepeatTimes ? obj.additionRepeatTimes : 1;
   obj.additionSeparator = obj.additionSeparator || "|";
   return obj
 }
function repeater(string, options) {
  string = String(string);
  let str = string.toString();

 
  let newOptions = overWrite(options);
  for (let i = 0; i < newOptions.repeatTimes; i++){
    for (let j = 0; j < newOptions.additionRepeatTimes; j++){
      str+= newOptions.addition 
      if (j < newOptions.additionRepeatTimes - 1) {
        str += newOptions.additionSeparator;
      }
    }
    if (i < newOptions.repeatTimes - 1) {
       str += newOptions.separator + string;
    }
   
  }
  
  return str;
  
}

module.exports = {
  repeater
};