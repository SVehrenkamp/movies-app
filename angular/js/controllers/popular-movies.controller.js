(function(){
	angular.module('moviesApp')
		.controller('PopularMoviesController', function($scope, $http, $window, Movies, WatchList){
			
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.heading = "Popular Movies";
			$scope.currentPage = 1;
			$scope.pages = null;

			$scope.show_details = function($index){
				$scope.movie_active = $scope.movies[$index];
			}
			$scope.add_movie = function(movie){
				movie.favorite = true;
				WatchList.add_movie(movie);
				console.log(WatchList.get_movies());
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

				Movies.get_popular(page).then(function(resp){
					$scope.movies = resp.data.results;

					$scope.pages = resp.data.total_pages;
					$scope.currentPage = resp.data.page;

					$scope.movie_active = $scope.movies[0];
				});

			}
			Movies.get_popular($scope.currentPage).then(function(resp){
				$scope.movies = resp.data.results;

				$scope.pages = resp.data.total_pages;
				$scope.page = resp.data.page;

				$scope.movie_active = $scope.movies[0];
			});

		});
})();