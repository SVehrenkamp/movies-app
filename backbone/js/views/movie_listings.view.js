define([
	"jquery",
	"backbone",
	"handlebars",
	"views/movie.view",
	"views/active_movie.view"
	],function(
		$,
		Backbone,
		Handlebars,
		MovieView,
		ActiveMovieView
		){

		var View = Backbone.View.extend({



			initialize: function(options){
				var self = this;

				this.collection.fetch().done(function(){
					self.render()
					.afterRender()
				});
			},

			render: function(){
				var view = this.$el.html();
				return this;
			},
			afterRender: function(){
				this.collection.each(this.renderMovies, this);

				app.vent.trigger('MOVIE_ACTIVE', this.collection.models[0]);

				return this;
			},
			renderMovies: function(movie){
				item = new MovieView({model:movie});
				this.$el.append(item.render().el);

				return this;
			}

		});

	return View;

});