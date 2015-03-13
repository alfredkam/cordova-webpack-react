var React = require('react');
var app = require('./cordova-app');
var log = require('./log');
var AppTag = require('./components/app');

require('../styles/all');
app.initialize();
app.on('deviceready', function (e) {
  log('device is ready');
  // document.getElementById('console').innerHTML = 'received';
  // var parentElement = document.getElementById('deviceready');
  // var listeningElement = parentElement.querySelector('.listening');
  // var receivedElement = parentElement.querySelector('.received');
  // listeningElement.setAttribute('style', 'display:none;');
  // receivedElement.setAttribute('style', 'display:block;');

  React.render(
    <AppTag />,
    document.getElementById('container')
  );
});


app.on('resume', function (e) {
  log('device resume');
});
