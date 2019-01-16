const { parse } = require('url');
const { getCharacter } = require('../service/rickAndMorty.js');
const shortid = require('shortid');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters/')) {
    //get rid of char
    //split on '/'
    //character, :id
    const id = url.pathname.slice(1).split('/')[1];
    //kill autofill!!!
    getCharacters(id)
      .then(characters => {
        res.setHeader('Content-Type', 'test/html');
        res.end('<html><body></body></html>');
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      })
      .get('./rickAndMortyApi.js')
      .then(response => {
        const json = response.body
        const results = json.results
        return results.map(char => {
          return { name: char.name }
        })
      });



  }
};
//to do: make notes.js with { text: 'I am note1' }
const notes = {}
http.createServer((req, res) => {
  if(req.method === 'POST' && req.url === '/notes') {
    body.parse(req)
      .then(body => {
        //to do: import and install shortid
        const id = shortid.generate();
        //below is the setter
        notes[id] = { ...body, id } //spreads into new one
        //spread operator ...
        res.end(JSON.stringify(notes[id])) // this is the getter
      })
  }
}


