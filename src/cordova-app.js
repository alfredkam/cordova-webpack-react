var observable = require('./observable');
var CordovaEvents = [
  'deviceready',
  'pause',
  'resume',
  'backbutton',
  'menubutton',
  'searchbutton',
  'endcallbutton',
  'volumedownbutton',
  'voumeupbutton'
];

var app = {
  initialize: function () {
    var self = this;
    CordovaEvents.forEach(function (event) {
      document.addEventListener(event, self.eventCallback.bind(self, event), false);
    });
  },

  eventCallback: function (eventName, eventObject) {
    this.trigger(eventName, eventObject);
  }
};

module.exports = observable(app);
