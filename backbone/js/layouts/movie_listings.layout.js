define([
	'jquery',
	'backbone',
	'marionette',
	'handlebars',
	'text!templates/movie_listings.html'
	], function(
		$,
		Backbone,
		Marionette,
		Handlebars,
		html
		){

		var MovieListingsLayout = Marionette.LayoutView.extend({
			id: "movie-listings",
			header: undefined,
			template: Handlebars.compile(html),

			initialize: function(options){
				this.header = options.header;
			},
			onRender: function(){
				console.log(this.$el.html(this.template({header: this.header})));
			},

			regions: {
				"activeMovie":".movie-active",
				"watchlist":".watchlist",
				"movies":".movies"
			}
		});
	return MovieListingsLayout;

});