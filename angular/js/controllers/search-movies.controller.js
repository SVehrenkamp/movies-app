(function(){
	angular.module('moviesApp')
		.controller('SearchMoviesController', function($scope, $http, $window, Movies){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Search Movies";
			$scope.results = null;

			$scope.search = function(query){
				Movies.search_movies(query).then(function(resp){
					$scope.results = resp.data.results.length > 1 ? resp.data.results : null;
					console.log($scope.results);
				});
			};

		});
})();