define([
	'jquery',
	'backbone',
	],function(
		$,
		Backbone
		){

		var Collection = Backbone.Collection.extend({

			url: function(){
				api_key = "ab43c822c34a09bb2595ac9f5d20a5d2";
				url = "https://api.themoviedb.org/3/movie/popular?&api_key="+api_key;

				return url;
			},
			initialize: function(options){
				this.fetch();
			},
			parse: function(resp, options){

				return resp.results;
			}
		});

	return Collection;
});