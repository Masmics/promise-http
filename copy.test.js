// const copy = require('./promises.js');
// //const fs = require('fs');
// const fsPromises = require('fs').promises;
// //
// describe('copy', () => {
//   afterEach(() => {
//     return fsPromises.unlink('./test.txt');
//   });

//   it('copies from src and write it to dst', () => {
//     return copy('./.gitignore', '/test.txt') ()
//       .then(() => {
//         //expect(fs.readFileSync('./.gitignore')).toEqual(fs.readFileSync('./test.txt))
        
//         return Promise.all([
//           didReadIt = fsPromises.readFile('./.gitignore'),
//           copyToFile = fsPromises.readFile('./test.txt')
//         ]);
//       })
//       .then(([didReadIt, copyToFile]) => {
//         expect(didReadIt).toEqual(copyToFile),
//       })
//     }
//   });
// });
