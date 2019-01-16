const transformer = require('./transformer');
//const fsPromises = require('fs').promises;

describe('transformer', () => {
  it('removes capital letters', () => {
    expect(transformer.removeCapitals('Hi There')).toEqual('i here');
  });
  it('capitalizes all letters', () => {
    expect(transformer.makeAllLettersCapital('i here')).toEqual('I HERE');
  });
  it('reverses the string', () => {
    expect(transformer.reverse('I HERE')).toEqual('EREH I');
  });
  it('trims spaces from the string', () => {
    expect(transformer.trim('EREH I')).toEqual('EREHI');
  });
  expect(transformer('Hi There')).toEqual('EREHI');
});
