requirejs.config({
	baseUrl: "/js/vendor",
    paths: {	  
    	"app":"../app",   
    	"modules": "../modules",
    	"archive":"../modules/archive",
    	"drivers":"../modules/drivers",
    	"global":"../modules/global",
    	"animation":"../modules/global/animation",
    	"footer":"../modules/global/footer",
    	"header":"../modules/global/header",
    	"modal":"../modules/global/modal",
    	"page":"../modules/global/page",
    	"media":"../modules/media",
    	"news":"../modules/news",
    	"social":"../modules/social",
		"marionette": "./backbone.marionette",
		'backbone.wreqr' : './backbone.wreqr',
		'backbone.babysitter' : './backbone.babysitter',
		'backbone': './backbone', 
		'underscore': './underscore',
		'jquery': './jquery',
		'picturefill': './picturefill.min',
		'velocity': './velocity.min',
		'moment':'moment.min',
		'moment.twitter':'./moment-twitter',
		'modal-window':'./modal-window',
		'slick':'./slick.min',
		'scroll': './jquery.scrollTo.min',
		'data':'../data'

    },
	shim: {
		"scroll": {
			deps: ["jquery"]
		},
        "velocity": {
            deps: [ "jquery" ]
       	}
    },
	waitSeconds:5000
});
define({});
