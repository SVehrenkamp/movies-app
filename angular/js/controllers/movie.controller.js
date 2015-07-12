(function(){
	angular.module('moviesApp')
		.controller('MovieController', function($scope, $stateParams, $window, Movies){
			
			var id = $stateParams.id;
			$scope.base_img_url = "http://image.tmdb.org/t/p/w300";
			$scope.limit = 6;
			
			//console.log($scope.params);
			
			Movies.get_movie(id).then(function(resp){
				$scope.movie = resp.data;
				console.log($scope.movie);
			});

			Movies.get_movie_images(id).then(function(resp){
				$scope.images = resp.data.backdrops;
				console.log($scope.images);
			});

			Movies.get_movie_reviews(id).then(function(resp){
				$scope.reviews = resp.data.results;
				console.log($scope.reviews);
			});

		});
})();