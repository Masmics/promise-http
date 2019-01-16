const { parse } = require('url');
const { 
  getCharacters 
} = require('../service/rickAndMortyApi.js');
const shortid = require('shortid');
const http = require('http');

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

const notes = {};
http.createServer((req, res) => {
  if(req.method === 'POST' && req.url === '/note') {
    notes.body.parse(req)
      .then(body => {
        //to do: import and install shortid
        const id = shortid.generate();
        //below is the setter
        notes[id] = { ...body, id }; //spreads into new one
        //spread operator ...
        console.log(notes[id]);
        res.end(JSON.stringify(notes[id])); // this is the getter
      });
  }
});
