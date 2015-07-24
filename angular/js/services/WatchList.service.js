(function(){
	angular.module('moviesApp')
		.service('WatchList', function($http){
			var api_key = "ab43c822c34a09bb2595ac9f5d20a5d2";
			var base_url = "https://api.themoviedb.org/3";
			var watchlist = {
				movies:[],
				movie_ids:[]
			};
			return{
				add_movie: function(movie){

					if(watchlist.movie_ids.indexOf(movie.id) != -1){
						watchlist.movies.push(movie);
						watchlist.movie_ids.push(movie.id);	
					} else {

						console.log('Movie already in your watchlist!');
					}


					return watchlist;
				},
				get_movies: function(){
					return watchlist.movies;
				},
				get_movie_ids: function(){
					return watchlist.movie_ids;
				}
			};
		});
})();