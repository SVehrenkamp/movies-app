define(function(require, exports, module) {
  var Backbone = require('backbone');
  var Marionette = require('marionette');
  var AppRouter = require('../app/app.routes');
  var AppLayout = require('../app/app.layout');
  var AppController = require('../app/app.controller');
  var $ = require('jquery');

  
  app = new Backbone.Marionette.Application();

  app.addInitializer(function(options){

  	app.addRegions({'main':'#wrapper'});
  	app.layout = new AppLayout();


  	app.controller = new AppController();
  	app.router = new AppRouter({controller: app.controller});
  });


  app.on('start', function(options){

  	app.main.show(app.layout);
  	Backbone.history.start();

  });


  module.exports = app;
  return app.start(devOptions);

});
