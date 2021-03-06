define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/watchlist_item.html'
	],function(
		$,
		Backbone,
		Handlebars,
		html
	){

		var View = Backbone.View.extend({

			template: Handlebars.compile(html),

			initialize: function(options){

			},
			render: function(){
				var view = this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});

	return View;

});