(function(){
	angular.module('moviesApp')
    	.directive('navbar', function(){
    		return {
	    		restrict: 'E',
		      	templateUrl: '../templates/navbar.html',
		      	scope: {
		        	creationDate: '='
		      	},
		      	controller: NavbarController,
		      	controllerAs: '$scope',
		      	bindToController: true
	      };
    	});

    	function NavbarController($scope, $window) {

	      var width = $window.innerWidth;
	      $scope.mobile  = width < 1000 ? true : false;

	      angular.element($window).bind('resize', function(){
	        checkWidth();
	        console.log($window.innerWidth);
	      });

	      var checkWidth = function(){
	        $scope.$apply(function(){
	          width = $window.innerWidth;
	          $scope.mobile  = width < 1000 ? true : false;
	        });
	      };

	    }
})();