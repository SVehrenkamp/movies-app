(function(){
	angular.module('moviesApp')
		.controller('NewMoviesController', function($scope, $http, $window, Movies){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Now Playing";
			$scope.currentPage = 1;
			$scope.pages = null;


			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}

			$scope.go_to_page = function(page){
				console.log('click');
				Movies.now_playing(page).then(function(resp){
					$scope.movies = resp.data.results;

					$scope.pages = resp.data.total_pages;
					$scope.page = resp.data.page;

					$scope.movie_active = $scope.movies[0];
				});

			}

			Movies.now_playing($scope.currentPage).then(function(resp){
				$scope.movies = resp.data.results;

				$scope.pages = resp.data.total_pages;
				$scope.page = resp.data.page;

				$scope.movie_active = $scope.movies[0];
			});

		});
})();