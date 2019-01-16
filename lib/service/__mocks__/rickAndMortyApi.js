//yes this is intentionally a duplicate file!
module.exports = {

  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'human',
      status: 'alive'
    });
  }
};
