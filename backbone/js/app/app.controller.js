define([
	"jquery",
	"backbone",
	"marionette",
	"handlebars",
	"collections/now_playing.collection",
	"views/navigation.view",
	"views/footer.view",
	"views/now_playing.view"
	],function(
		$,
		Backbone,
		Marionette,
		Handlebars,
		NowPlayingCollection,
		NavigationView,
		FooterView,
		NowPlayingView
		){

		var AppController = Marionette.Controller.extend({

			constructor: function(options){
				Marionette.Controller.prototype.constructor.call(this, options);
			},

			initialize: function(options){
			},
			initTemplate: function(){
				var navigation_view = new NavigationView();
				app.layout.navigation.show(navigation_view);
				
				var footer_view = new FooterView();
				app.layout.footer.show(footer_view);
				
				return this;
			},

			nowPlaying: function(){
				var collection = new NowPlayingCollection();
				var now_playing_view = new NowPlayingView({collection:collection});
				app.layout.content.show(now_playing_view);

				return this;

			},
			popular: function(){},
			search: function(){},
			favorites: function(){},

			showNowPlaying: function(){
				this.initTemplate().nowPlaying();
			},
			showPopular: function(){},
			showSearch: function(){},
			showFavorites: function(){}




		});

	return AppController;

});