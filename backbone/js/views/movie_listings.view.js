define([
	"jquery",
	"backbone",
	"handlebars",
	"views/movie.view",
	"views/active_movie.view",
	"text!templates/movie_listings.html"
	],function(
		$,
		Backbone,
		Handlebars,
		MovieView,
		ActiveMovieView,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),
			header: null,


			initialize: function(options){
				this.header = options.header;
				var self = this;

				this.collection.fetch().done(function(){
					self.render()
					.afterRender()
				});

				app.vent.on('movie_selected', this.renderActiveMovie, this);
			},

			render: function(){
				var view = this.$el.html(this.template({header: this.header}));
				return this;
			},
			afterRender: function(){
				this.renderActiveMovie(this.collection.models[0]);
				this.collection.each(this.renderMovies, this);

				return this;
			},
			renderMovies: function(movie){
				item = new MovieView({model:movie});
				this.$el.find('.movies').append(item.render().el);

				return this;
			},
			renderActiveMovie: function(movie){
				item = new ActiveMovieView({model:movie});
				this.$el.find('.movie-active').html(item.render().el);
				return this;
			}

		});

	return View;

});