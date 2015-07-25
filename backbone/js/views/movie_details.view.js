define([
	"jquery",
	"backbone",
	"handlebars",
	"text!templates/movie_details.html"
	],function(
		$,
		Backbone,
		Handlebars,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),
			header: null,


			initialize: function(options){
				var self = this;
				this.model.fetch().done(function(){
					self.render();
				});
			},

			render: function(){
				console.log(this.model.toJSON());
				var view = this.$el.html(this.template(this.model.toJSON()));
				return this;
			}

		});

	return View;

});