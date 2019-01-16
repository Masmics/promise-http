const request = require('supertest');
const app = require('./app');
//const rickRole = require('./services/rickAndMortyApi.js');

jest.mock('../service/__mock__/rickAndMortyApi.js', () => ({
  // getCharacter() {  //omit (id) bcse laid out below
  //   return Promise.resolve({
  //     name: 'Rick Sanchez',
  //     species: 'human',
  //     status: 'alive'
  //   });
    // return rickRole.getCharacter(id)
    //   .get('id')
    //   .then()
  }
}));

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/character1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'human',
          status: 'alive'
        });
      });
  });
});

