(function(){
	angular.module('moviesApp')
    	.directive('footer', function(){
    		return {
	    		restrict: 'E',
		      	templateUrl: '../templates/footer.html',
		      	scope: {
		        	creationDate: '='
		      	},
		      	controller: FooterController,
		      	controllerAs: '$scope',
		      	bindToController: true
	      };
    	});

    	function FooterController($scope, $window) {

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