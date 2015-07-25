define([
	"jquery",
	"backbone",
	"marionette",
	"handlebars",
	"models/movie.model",
	"collections/now_playing.collection",
	"collections/popular.collection",
	"collections/watchlist.collection",
	"views/navigation.view",
	"views/footer.view",
	"views/movie_listings.view",
	"views/active_movie.view",
	"views/movie_details.view",
	"views/watchlist.view",
	"layouts/movie_listings.layout"
	],function(
		$,
		Backbone,
		Marionette,
		Handlebars,
		MovieModel,
		NowPlayingCollection,
		PopularCollection,
		WatchlistCollection,
		NavigationView,
		FooterView,
		MovieListingsView,
		ActiveMovieView,
		MovieDetailsView,
		WatchlistView,
		MovieListingsLayout
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
				var movie_listings_layout = new MovieListingsLayout({header: "Now Playing"});
				
				var collection = new NowPlayingCollection();
				var now_playing_view = new MovieListingsView({collection:collection});

				var active_movie_view = new ActiveMovieView({model:new Backbone.Model()});

				var watchlist_collection = new WatchlistCollection();
				var watchlist_view = new WatchlistView({collection:watchlist_collection});

				app.layout.content.show(movie_listings_layout);
				movie_listings_layout.movies.show(now_playing_view);
				movie_listings_layout.activeMovie.show(active_movie_view);
				movie_listings_layout.watchlist.show(watchlist_view);


				return this;

			},
			popular: function(){
				var movie_listings_layout = new MovieListingsLayout({header: "Popular Movies"});

				var collection = new PopularCollection();
				var popular_view = new MovieListingsView({collection:collection, header: "Popular Movies"});

				var active_movie_view = new ActiveMovieView({model:new Backbone.Model()});

				var watchlist_collection = new WatchlistCollection();
				var watchlist_view = new WatchlistView({collection:watchlist_collection});

				app.layout.content.show(movie_listings_layout);
				movie_listings_layout.movies.show(popular_view);
				movie_listings_layout.activeMovie.show(active_movie_view);
				movie_listings_layout.watchlist.show(watchlist_view);
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