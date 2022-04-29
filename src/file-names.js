const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newNames = names.slice();

  newNames.forEach((name, ind) => {   
    let k = 1;
    newNames.slice(ind+1).forEach((el, i) => {
      if(el == name) {
        newNames[i+ind+1] = name + `(${k})`;
        k ++;
      }    
    })
  })

  return newNames;
}

module.exports = {
  renameFiles
};
