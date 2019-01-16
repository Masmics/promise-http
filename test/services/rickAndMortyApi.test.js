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
          species: 'human',
          status: 'alive'
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

