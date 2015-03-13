var app = require('./cordova-app');
var log = require('./log');
require('../styles/all.css');

app.initialize();

app.on('deviceready', function (e) {
  log('hello', 'world');
  document.getElementById('console').innerHTML = 'received';
  var parentElement = document.getElementById('deviceready');
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');
  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');
});
