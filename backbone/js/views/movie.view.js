define([
	"jquery",
	"backbone",
	"handlebars",
	"text!templates/movie.html"
	],function(
		$,
		Backbone,
		Handlebars,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),

			events: {
				"click .movie":"showMovie"
			},

			initialize: function(options){

			},
			render: function(){
				var view = this.$el.html(this.template(this.model.toJSON()));
				return this;
			},
			showMovie: function(){
				console.log(this.model.get('title'));
				app.vent.trigger('movie_selected', this.model);
			}

		});

	return View;

});