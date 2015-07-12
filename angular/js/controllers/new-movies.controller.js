(function(){
	angular.module('moviesApp')
		.controller('NewMoviesController', function($scope, $http, $window, Movies){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Now Playing";

			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}

			Movies.now_playing().then(function(resp){
				$scope.movies = resp.data.results;
				$scope.movie_active = $scope.movies[0];
				console.log($scope.movies);
			});

		});
})();