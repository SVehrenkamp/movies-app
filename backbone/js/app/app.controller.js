define([
	"jquery",
	"backbone",
	"marionette",
	"handlebars",
	"models/movie.model",
	"collections/now_playing.collection",
	"collections/popular.collection",
	"views/navigation.view",
	"views/footer.view",
	"views/movie_listings.view",
	"views/movie_details.view"
	],function(
		$,
		Backbone,
		Marionette,
		Handlebars,
		MovieModel,
		NowPlayingCollection,
		PopularCollection,
		NavigationView,
		FooterView,
		MovieListingsView,
		MovieDetailsView
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
				var now_playing_view = new MovieListingsView({collection:collection, header:"Now Playing"});
				app.layout.content.show(now_playing_view);

				return this;

			},
			popular: function(){
				var collection = new PopularCollection();
				var popular_view = new MovieListingsView({collection:collection, header: "Popular Movies"});
				app.layout.content.show(popular_view);
			},
			movie_details: function(id){
				var model = new MovieModel({query:id});
				var movie_details_view = new MovieDetailsView({model:model});
				app.layout.content.show(movie_details_view);
			},
			search: function(){},
			favorites: function(){},

			showNowPlaying: function(){
				this.initTemplate().nowPlaying();
			},
			showPopular: function(){
				this.initTemplate().popular();
			},
			showMovieDetails: function(id){
				this.initTemplate().movie_details(id);
			},
			showSearch: function(){},
			showFavorites: function(){}




		});

	return AppController;

});