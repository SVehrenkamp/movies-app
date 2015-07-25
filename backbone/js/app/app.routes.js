define([
	"jquery",
	"backbone",
	"marionette"
	], function(
		$,
		Backbone,
		Marionette
		){

		var AppRouter = Marionette.AppRouter.extend({
			
			appRoutes: {
				"":"showNowPlaying",
				"new":"showNowPlaying",
				"popular":"showPopular",
				"search":"showSearch",
				"favorites":"showFavorites"

			}

		});

		return AppRouter;

});