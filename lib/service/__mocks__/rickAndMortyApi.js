//yes this is intentionally a duplicate file!
module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  }
};

// getCharacters() {
//   return Promise.resolve([
//     {
//       name: 'Rick Sanchez',
//       species: 'Human',
//       status: 'Alive'
//     },
//     {
//       name: 'Morty Smith',
//       species: "Human",
//       status: 'Alive'
//     }
//   ]);
// }

