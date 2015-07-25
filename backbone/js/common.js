requirejs.config({
	baseUrl: "/js/vendor",
    paths: {	  
    	"app":"../app",
		'models':'../models',
		'collections':'../collections',
		'views':'../views',
		'layouts':'../layouts',
    	"handlebars":"handlebars/handlebars.min",
		"marionette": "./marionette/lib/backbone.marionette.min",
		'backbone.wreqr' : './backbone.wreqr/lib/backbone.wreqr.min',
		'backbone.babysitter' : './backbone.babysitter/lib/backbone.babysitter.min',
		'backbone': './backbone/backbone-min', 
		'underscore': './underscore/underscore-min',
		'jquery': './jquery/dist/jquery.min',
		'templates':'../../templates',
		'text': './requirejs-text/text'

    },
	shim: {
    },
	waitSeconds:5000
});
