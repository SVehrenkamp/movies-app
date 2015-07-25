requirejs.config({
	baseUrl: "/js/vendor",
    paths: {	  
    	"app":"../app",
		"marionette": "./marionette/lib/backbone.marionette.min",
		'backbone.wreqr' : './backbone.wreqr/lib/backbone.wreqr.min',
		'backbone.babysitter' : './backbone.babysitter/lib/backbone.babysitter.min',
		'backbone': './backbone/backbone-min', 
		'underscore': './underscore/underscore-min',
		'jquery': './jquery/dist/jquery.min',

    },
	shim: {
    },
	waitSeconds:5000
});
