(function(){
	angular.module('moviesApp')
		.service('WatchList', function($http){
			var api_key = "ab43c822c34a09bb2595ac9f5d20a5d2";
			var base_url = "https://api.themoviedb.org/3";
			var watchlist = [];
			return{
				add_movie: function(movie){
					watchlist.push(movie);

					return watchlist;
				},
				get_movies: function(){
					return watchlist;
				}
			};
		});
})();