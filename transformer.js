const fsPromises = require('fs').promises;

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');

};
const makeAllLettersCapital = str => str.toUpperCase();
const reverse = str => str.split(''.reverse().join(''));
const trim = str => str.trim();

const transformer = src => {
  fsPromises.readFile(src, { encoding: 'utf8' })
    .then(data => removeCapitals(data))
    .then(data => makeAllLettersCapital(data))
    .then(data => reverse(data))
    .then(data => trim(data));
    
  //then remove caps
  //then make all caps
  //then reverse the string
};

module.exports = {
  transformer,
  removeCapitals
};

