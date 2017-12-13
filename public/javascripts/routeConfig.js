(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeController',
				controllerAs: 'vm'
			})
			.when('/addPolicy', {
				templateUrl: 'partials/addPolicy.html',
				controller: 'addPolicyController',
				controllerAs: 'vm'
			})
			.when('/editPolicy', {
				templateUrl: 'partials/editPolicy.html',
				controller: 'editPolicyController',
				controllerAs: 'vm'
			})
			.when('/policy/:name', {
				templateUrl: 'partials/Policy.html',
				controller: 'policyController',
				controllerAs: 'vm'
			})
			.when('/search/:search', {
				templateUrl: 'partials/searchResults.html',
				controller: 'searchController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}
})();