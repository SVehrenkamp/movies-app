(function(){
	angular.module('moviesApp')
    	.directive('watchlist', function(){
    		return {
	    		restrict: 'EA',
		      	templateUrl: '../templates/watchlist.html',
				scope: {
			        	creationDate: '='
			      	},
			      	controller: WatchListController,
			      	controllerAs: '$scope',
			      	bindToController: true
		      };
	    	});

	    	function WatchListController($scope, $window, WatchList) {

		      $scope.movies = WatchList.get_movies();

		    }

    	
})();