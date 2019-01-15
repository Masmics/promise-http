const { transformer } = require('./transformer');
const fsPromises = require('fs').promises;

describe('transformer', () => {
  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transTxt => expect(transTxt).toEqual('EREH I'),
  )}
)};
