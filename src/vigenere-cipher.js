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
//npm test --test test/vigenere-cipher.test

class VigenereCipheringMachine {

  constructor(fwd = true) {
    this.key = '';
    this.text = '';
    this.cypher = '';
    this.fwdFlag = fwd;
  }

  getArgs(args, func) {
    if (!args[0] || !args[1]) throw new Error('Incorrect arguments!');
    this.key = args[1].toUpperCase();
    this.key = this.key.padEnd(args[0].replace(/[^a-zA-Z]/g, '').length, this.key)
    switch (func) {
      case 'enc':
        this.text = args[0].toUpperCase();
        this.cypher = '';
        break;
      case 'dec':
        this.cypher = args[0].toUpperCase();
        this.text = '';
        break;
    }
  }

  reverse(s) {
    return s.split('').reverse().join('');
  }
  encrypt(...args) {
    this.getArgs(args, 'enc');
    let lag = 0;
    for (let i = 0; i < this.text.length; i++) {
      
      if (this.text.charCodeAt(i) > 90 || this.text.charCodeAt(i) < 65) {
        this.cypher += this.text[i];
        lag++;
      } else {
        this.cypher += String.fromCharCode(((this.text.charCodeAt(i) + this.key.charCodeAt(i - lag)) % 26) + 65);
      }
    }
    if (!this.fwdFlag) this.cypher = this.reverse(this.cypher);
    return this.cypher;
  }
  decrypt(...args) {
    this.getArgs(args, 'dec');
    let lag = 0;
    for (let i = 0; i < this.cypher.length; i++) {
      if (this.cypher.charCodeAt(i) > 90 || this.cypher.charCodeAt(i) < 65) {
        this.text += this.cypher[i];
        lag++;
      } else {
        this.text += String.fromCharCode(((((this.cypher.charCodeAt(i) - this.key.charCodeAt(i-lag)) % 26) + 26) % 26) + 65);
      }
    }
    if (!this.fwdFlag) this.text = this.reverse(this.text);
    return this.text;
  }

}

module.exports = {
  VigenereCipheringMachine
};
