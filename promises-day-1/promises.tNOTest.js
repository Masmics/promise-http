//const copy = require('./promises.js');
//const readIt = './gitignore';
// const fs = require('fs');
// const fsPromises = require('fs').promises;

// describe('copy', () => {
//   afterEach(() => {
//     return fsPromises.unlink('./test.txt');
//   });

//   it('copies from src and write it to dst', () => {
//     return copy('./.gitignore', '/test.txt')
//       .then(() => {
//         expect(fs.readFileSync('./.gitignore')).toEqual(fs.readFileSync('./test.txt))
        
//         return fsPromises.all([
//           fsPromises.readFile(readIt),
//           fsPromises.readFile('./test.txt')
//         ]);
//       })
//       .then(([didReadIt, copyToFile]) => {
//         expect(didReadIt).toEqual(copyToFile);
//       });

//     // .then(([readIt, '/test.txt']) => {
//     //   expect(copy.readIt).toEqual('test.txt');
//     // })
//     // .catch(err => expect(err).toBeFalsy());
//   });
// });
