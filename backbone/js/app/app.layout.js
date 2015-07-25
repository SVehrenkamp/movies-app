define([
	"jquery",
	"backbone",
	"marionette",
	"handlebars",
	"text!app/app.layout.html"
	], function(
		$,
		Backbone,
		Marionette,
		Handlebars,
		html
		){

		AppLayout = Backbone.Marionette.LayoutView.extend({
			id: "Main",
			template: Handlebars.compile(html),

			initialize: function(){

			},
			regions: {
				"navigation": "#navigation",
				"content" : "#main-inner",
				"footer" : "#footer",
			}
		});

	return AppLayout;


});