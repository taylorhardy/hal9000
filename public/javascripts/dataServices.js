(function () {
	angular
		.module('app')
		.factory('dataService', dataService);

	dataService.$inject = ['$http'];

	function dataService($http) {
		var currentUser;
		var service = {
			getCurrentUser: getCurrentUser
		};
		return service;

		function getCurrentUser() {

		}
	}
})();