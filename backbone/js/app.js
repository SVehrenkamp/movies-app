define(function(require, exports, module) {
  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var AppRouter = require('../app.routes');
  // var AppLayout = require('app/app.layout');
  // var AppController = require('app/app.controller');
  var $ = require('jquery');

  
  app = new Backbone.Marionette.Application();



  module.exports = app;
  return app.start(devOptions);

});
