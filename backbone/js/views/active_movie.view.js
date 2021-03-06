define([
	"jquery",
	"backbone",
	"handlebars",
	"text!templates/active_movie.html"
	],function(
		$,
		Backbone,
		Handlebars,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),


			initialize: function(options){
				var self = this;

				app.vent.on('MOVIE_ACTIVE', function(model){
					self.model = model;
					self.render();
				});


			},
			render: function(){
				var view = this.$el.html(this.template(this.model.toJSON()));
				return this;
			}

		});

	return View;

});