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
				"click .movie":"showMovie",
				"click .add-btn":"addMovie"
			},

			initialize: function(options){

				this.listenTo(this.model, 'change', this.render);

			},
			render: function(){
				var view = this.$el.html(this.template(this.model.toJSON()));
				return this;
			},
			showMovie: function(){
				console.log(this.model.get('title'));
				app.vent.trigger('MOVIE_ACTIVE', this.model);
			},
			addMovie: function(e){
				e.stopPropagation();
				this.model.set({favorite: true});
				app.vent.trigger('MOVIE_ADDED', this.model);
			}

		});

	return View;

});