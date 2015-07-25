define([
	'jquery',
	'backbone',
	'handlebars',
	'text!/templates/movie_details.html'
	],function(
		$,
		Backbone,
		Handlebars,
		html
		){

		var Model = Backbone.Model.extend({

			query: undefined,

			initialize: function(options){
				this.query = options.query;
			},

			url: function(){
				query = this.query;
				api_key = "ab43c822c34a09bb2595ac9f5d20a5d2";
				url = "https://api.themoviedb.org/3"+"/movie/"+query+"?api_key="+api_key;
				console.log(url);
				return url;
			},
			parse: function(resp, options){
				console.log(resp);
				return resp;
			}
		});

	return Model;

});