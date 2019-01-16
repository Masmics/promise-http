const promiseCheck = require('./promiseCheck');
const fsPromises = require('fs').promises;
const readIt = require('./http.md'); //elsewhere this is different

describe('promiseCheck', () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fsPromises.readFile(readIt))).toBeTruthy();
  });

  it('returns false if it is not a promise', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
