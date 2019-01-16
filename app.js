const { parse } = require('url');
const { getCharacter } = require('./service/rickAndMorty.js');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')) {
    //get rid of char
    //split on '/'
    //character, :id
    const id = url.pathname.slice(1).split('/')[1];
    //kill autofill!!!
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }

};

