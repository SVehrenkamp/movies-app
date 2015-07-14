(function(){
	angular.module('moviesApp')
		.controller('FavoritesController', function($scope, $window, Movies, WatchList){
			
			$scope.movies = WatchList.get_movies();

			$scope.movie_active = $scope.movies[0];

			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}

		});
})();