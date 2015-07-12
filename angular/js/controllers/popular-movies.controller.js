(function(){
	angular.module('moviesApp')
		.controller('PopularMoviesController', function($scope, $http, $window, Movies){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Popular Movies";

			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}

			Movies.get_popular().then(function(resp){
				$scope.movies = resp.data.results;
				$scope.movie_active = $scope.movies[0];
				console.log($scope.movies);
			});

		});
})();