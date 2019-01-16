const fs = require('fs');
const readIt = require('./http.md');
// pending state - waiting for promise to finish
// fulfilled - finished and resolved
// rejected - finished and rejected

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromise(readIt)
  .then(data => console.log(data));

