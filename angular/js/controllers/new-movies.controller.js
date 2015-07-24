(function(){
	angular.module('moviesApp')
		.controller('NewMoviesController', function($scope, $http, $window, Movies, WatchList, $stateParams, $state){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Now Playing";
			$scope.currentPage = 1;
			$scope.pages = null;

			$scope.page = $stateParams.page;
			console.log($scope.page);


			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}
			$scope.add_movie = function(movie){
				movie.favorite = true;
				WatchList.add_movie(movie);
				console.log(WatchList.get_movies());
				console.log(WatchList.get_movie_ids());
			}

			$scope.go_to_page = function(page){

				var destination;

				switch(page){
					case 'next':
						destination = $scope.currentPage + 1;
						
						$scope.get_movies(destination);
						break;
					case 'prev':
						destination = $scope.currentPage - 1;

						$scope.get_movies(destination);
						break;
					default:
						$scope.get_movies(page);
				}

			}

			$scope.get_movies = function(page){

				Movies.now_playing(page).then(function(resp){
					$scope.movies = resp.data.results;

					$scope.pages = resp.data.total_pages;
					$scope.currentPage = resp.data.page;

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