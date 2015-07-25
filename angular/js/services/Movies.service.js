(function(){
	angular.module('moviesApp')
		.service('Movies', function($http, WatchList){
			var api_key = "ab43c822c34a09bb2595ac9f5d20a5d2";
			var base_url = "https://api.themoviedb.org/3";


			return{
				search_movies: function(query){
					var promise= $http.get(base_url+'/search/movie?query='+query+'&api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;
				},
				now_playing: function(page){
					var promise = $http.get(base_url+'/movie/now_playing?page='+page+'&api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;
				},
				get_popular: function(page){
					var promise = $http.get(base_url+'/movie/popular?page='+page+'&api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;
				},
				get_movie: function(id){
					var promise = $http.get(base_url+'/movie/'+id+'?api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;
				},
				get_movie_images: function(id){
					var promise = $http.get(base_url+'/movie/'+id+'/images?api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;

				},
				get_movie_reviews: function(id){
					var promise = $http.get(base_url+'/movie/'+id+'/reviews?api_key='+api_key)
						.success(function(data){
							return data;
						});
						return promise;
				}
			};
		});
})();