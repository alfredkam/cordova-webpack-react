var app = require('./cordova-app');

app.initialize();

app.on('deviceready', function (e) {
  var args = Array.prototype.slice.call((arguments || []), 0);
  document.getElementById('console').innerHTML = 'received';
  var parentElement = document.getElementById('deviceready');
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');
  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');
});
