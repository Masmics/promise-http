const fsPromises = require('fs').promises;

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
const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');

};
const makeAllLettersCapital = str => {
  fsPromises.readFile(str, { encoding: 'utf8' });
  return str.toUpperCase();
};
const reverse = str => {
  fsPromises.readFile(str, { encoding: 'utf8' });
  return str.split(reverse().join(''));
};
const trim = str => {
  fsPromises.readFile(str, { encoding: 'utf8' });
  return str.trim();
};

module.exports = {
  transformer,
  removeCapitals,
  makeAllLettersCapital,
  reverse,
  trim
};

