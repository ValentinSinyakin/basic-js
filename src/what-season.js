const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  
   if (!date) {
    return 'Unable to determine the time of year!'
  }
  
  try {
    date.toUTCString();
      if (date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 5) {
      console.log('summer')
      return "summer";
    }
    else if (date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10) {
      console.log('autumn')
      return 'autumn';
    }
    else if (date.getMonth() == 11|| date.getMonth() == 0 || date.getMonth() == 1) {
      console.log('winter')
       return "winter"
    }
    else if (date.getMonth() == 2 || date.getMonth() == 3|| date.getMonth() == 4){
      console.log('spring')
      return 'spring';
  }
  }
  catch {
    throw new Error("Invalid date!")
  }

}
module.exports = {
  getSeason
};