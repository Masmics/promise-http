const request = require('superagent');
const Promise = require('promises');
////////////////////////////////////
request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    return res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    return Promise.all(originUrls.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRes => originRes.body));

