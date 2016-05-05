app.config(function($routeProvider) {

	$routeProvider 
	.when('/', { 
		templateUrl: 'home.html',
		controller: 'mainController'
	})

	.when('/portfolio', { 
		templateUrl: 'portfolio.html',
		controller: 'mainController'
	})

	.when('/about', { 
		templateUrl: 'about.html',
		controller: 'mainController'
	})

	.when('/travel', { 
		templateUrl: 'travels.html',
		controller: 'mainController'
	});
});