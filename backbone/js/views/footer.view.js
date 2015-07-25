define([
	"jquery",
	"backbone",
	"handlebars",
	"text!templates/footer.html"
	],function(
		$,
		Backbone,
		Handlebars,
		html
		){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),

			initialize: function(){},

			render: function(){
				var view = this.$el.html(this.template());
				return view;
			}

		});

	return View;

});