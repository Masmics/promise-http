// const fsPromises = require('fs').promises;
// const readIt = ('./.gitignore');

// pending state - waiting for promise to finish
// fulfilled - finished and resolved
// rejected - finished and rejected

// fsPromises.readFile(readIt, { encoding: 'utf8' })
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// fsPromises.writeFile('test.txt', 'sampleText')
//   .then(() => console.log('done!'))
//   .catch(err => console.error(err));

// module.exports = function copy(src, dst) {

//   fsPromises.readFile(src, { encoding: 'utf8' })
//     .then(data => fsPromises.writeFile(dst, data))
//     .then(console.log('copied it!'))
//     .catch(err => console.error(err));

//   expect(readIt).toEqual('test.txt');

// fsPromises.writeFile(dst, 'sampleText')
//   .then(() => console.log('write step complete!'))
//   .catch(err => console.error(err));
//};

