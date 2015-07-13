(function(){
	angular.module('moviesApp')
    	.directive('pagination', function(){
    		return {
	    		restrict: 'EA',
		      	templateUrl: '../templates/pagination.html',
		      	scope: false
	      };
    	});

    	
})();