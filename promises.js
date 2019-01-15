const fsPromises = require('fs').promises;
const readIt = ('./.gitignore');


// pending state - waiting for promise to finish
// fulfilled - finished and resolved
// rejected - finished and rejected

fsPromises.readFile(readIt, { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

fsPromises.writeFile(readIt, 'sampleText')
  .then(() => console.log('done!'))
  .catch(err => console.error(err));

