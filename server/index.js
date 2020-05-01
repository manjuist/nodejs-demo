'use strict'

const http = require('http');
const path = require('path');
const mime = require('mime');
const jwt = require('jsonwebtoken');

//const js2json = require('./js2json');
//const test = require('../src/test.json');

const methodMap = require('./methodMap');

/* eslint-disable */
const token = jwt.sign({
  value:4
},'a')
/* eslint-enable */

function getFileName(reqUrl){
  const URLObj = path.parse(reqUrl);
  const { base } = URLObj;
  if (base) {
    return base
  }
  return '/'
}

http.createServer(function(req, res) {
  const {
    method,
    url: reqUrl,
    headers: {host}
  } = req;
  const fn = methodMap[method];
  res.writeHead(200, {'Content-Type': mime.getType(reqUrl) || 'text/html; charset=utf-8'});
  //res.writeHead(301, {'location': 'http://www.baidu.com'});

  fn(getFileName(reqUrl, host))
    .then(result=>{
     res.end(result)
    // res.end(js2json()(res))
    })
})
  .listen(4000, '127.0.0.1')

console.log('server running. port 4000')
