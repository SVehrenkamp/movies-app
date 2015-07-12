(function(){
	angular.module('moviesApp', ['ui.router'])
		.config(function($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('/new');

			$stateProvider
				.state('new', {
			        url: '/new',
			        views: {
			          "Main": {
			            templateUrl: '../templates/movies_listings.html',
			            controller: 'NewMoviesController',
			            controllerAs: 'NewMovies'
			          }
			        }
		      	})
				.state('popular', {
			        url: '/popular',
			        views: {
			          "Main": {
			            templateUrl: '../templates/movies_listings.html',
			            controller: 'PopularMoviesController',
			            controllerAs: 'PopularMovies'
			          }
			        }
		      	})
				.state('search', {
			        url: '/search',
			        views: {
			          "Main": {
			            templateUrl: '../templates/search.html',
			            controller: 'SearchMoviesController',
			            controllerAs: 'SearchMovies'
			          }
			        }
		      	})
				.state('movie', {
			        url: '/movie/:id',
			        views: {
			          "Main": {
			            templateUrl: '../templates/movie.html',
			            controller: 'MovieController',
			            controllerAs: 'Movie'
			          }
			        }
		      	});	
		});
})();