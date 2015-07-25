define([
	'jquery',
	'backbone',
	],function(
		$,
		Backbone
		){

		var Collection = Backbone.Collection.extend({

			url: function(){
				return url;
			},
			initialize: function(options){
			}
		});

	return Collection;
});