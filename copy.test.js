const copy = require('./promises.js');
const fs = require('fs');
const fsPromises = require('fs').promises;
//
describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy.md');
  });

  it('copies from src and write it to dst', () => {
    return copy('./http.md', '/http-copy.md') ()
      .then(() => {
        //expect(fs.readFileSync('./.gitignore')).toEqual(fs.readFileSync('./test.txt))
        
        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([readHttpMd, copyHttpMd]) => {
        expect(readHttpMd).toEqual(copyHttpMd);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});
