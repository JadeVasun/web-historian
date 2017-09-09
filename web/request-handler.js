var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
// require more modules/folders here!
var fs = require('fs');

exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    
    var url;
    if (req.url === '/') {
      url = '/index.html';
      
    }
  }
  helpers.serveAssets(res, url);
  // res.end(archive.paths.list);
};
