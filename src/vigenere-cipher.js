const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  constructor(isReverse = true) {
    this.reversed = !isReverse
  }

  encrypt(encMessage, key) {
    if (encMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    key = key.toLowerCase().split("")
    let spaces = []
    encMessage.split('').forEach((element, index) => {
      if (element === ' ') {
       spaces.push(index)
      }
    })
    encMessage = encMessage.toLowerCase().replace(/\s/g, '')
    let index = []
    let enc = []
    for (let i = 0; i < key.length; i++) {
      let pushingEl =this.alphabet.indexOf(key[i])
      index.push(pushingEl)
    }
    for (let i = 0; i < encMessage.length; i++) {
      if (this.alphabet.includes(encMessage[i])) {
         enc.push(this.alphabet[(this.alphabet.indexOf(encMessage[i]) + index[i % index.length]) % this.alphabet.length+1-1])
      }
      else {
         enc.push(encMessage[i])
    }
    }
    for (let i = 0; i < spaces.length; i++) {
      enc.splice(spaces[i], 0, ' ');
    }
    if (this.reversed === true) {
      let output =enc.reverse().join('')
      return output.toUpperCase();
      
  }
    let output = enc.join('')
    return output.toUpperCase()
  }

  decrypt(enc, key) {
    if ( key === undefined||enc === undefined ) {
      throw new Error('Incorrect arguments!')
      
    }
    key = key.toLowerCase().split("")
    let spaces = []
    enc.split('').forEach((element, index) => {
      if (element === ' ') {
       spaces.push(index)
      }
    })
    enc = enc.toLowerCase().replace(/\s/g, '')
    let index = []
    let output = []
    for (let i = 0; i < key.length; i++) {
      index.push(this.alphabet.indexOf(key[i]))
  }
    for (let i = 0; i < enc.length; i++) {
      if (this.alphabet.includes(enc[i])) {
        if ((this.alphabet.indexOf(enc[i]) - index[i % index.length]) % this.alphabet.length < 0) {
          let el = this.alphabet[(this.alphabet.length + (this.alphabet.indexOf(enc[i]) - index[i % index.length]) % this.alphabet.length)];
          output.push(el);
        }
        else {
          let el =this.alphabet[(this.alphabet.indexOf(enc[i]) - index[i % index.length]) % this.alphabet.length]
          output.push(el)
        } }
    else {
        output.push(enc[i])
      }
    }
    for (let i = 0; i < spaces.length; i++) {
      output.splice(spaces[i], 0, ' ')
    }
    if (this.reversed === true) {
      let result  = output.reverse().join('')
      return result.toUpperCase()
    }
    let result = output.join('')
    return result.toUpperCase()
    }
}
module.exports = {
  VigenereCipheringMachine
};