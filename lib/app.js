const { parse } = require('url');
const { 
  getCharacters 
} = require('../service/rickAndMorty.js');
// const shortid = require('shortid');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters/')) {
    //get id of char
    //split on '/'
    //character, :id
    const id = url.pathname.slice(1).split('/')[1];

    getCharacters(id)
      .then(characters => {
        res.setHeader('Content-Type', 'application/json');
        res.end('<html><body></body></html>');
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
};

//to do: make notes.js with { text: 'I am note1' }
// const notes = {};
// http.createServer((req, res) => {
//   if(req.method === 'POST' && req.url === '/notes') {
//     notes.body.parse(req)
//       .then(body => {
//         //to do: import and install shortid
//         const id = shortid.generate();
//         //below is the setter
//         notes[id] = { ...body, id }; //spreads into new one
//         //spread operator ...
//         res.end(JSON.stringify(notes[id])); // this is the getter
//       });
//   }
// });
