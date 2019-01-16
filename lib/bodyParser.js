const request = require('supertest');
const Promise = require('promises');

module.exports = req => {
  return new Promise((resolve, reject) => {
    if(req.method === 'GET') {
      return resolve();
    };
    if(req.headers['content-type'] || req.getHeader('Content-Type')!== 'application/json') {
      return reject('We only support JSON');
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });  // reading in chunks and appending to the string
         // when does next CT start?

    req.on('end', () => {
      let json = null;
      try {            // read up on try/catch
        json = JSON.parse(body);
      } catch(e) {    // parse this as json
        return reject(e);
      }  // inside of a try so if it fails it doesn't crash server!
      resolve(json);
    });

    req.on('error', err => {
      reject(err);
  });
}
