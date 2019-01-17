const {
  getCharacter,
  getCharacters
} = require('../../lib/service/rickAndMortyApi');

describe('R+M service', () => {
  it('it gets one R+M character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });

  it('it gets a list of R+M characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toHaveLength(20);
        ///why not .toEqual though?
      });
  });
});

