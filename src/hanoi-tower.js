const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(number,speed) {
   let turnsNum = 2 ** number - 1;

  let speedNum = Math.floor(turnsNum / speed * 3600) ;

   let obj ={
    turns: turnsNum,
    seconds:speedNum
  }

  console.log(obj)
  return obj;
}

module.exports = {
  calculateHanoi
};