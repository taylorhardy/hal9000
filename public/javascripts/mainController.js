(function () {
	angular
		.module('app')
		.controller('mainController', mainController);

	mainController.$inject = ['$http', '$location', 'dataService', '$routeParams', '$scope'];

	function mainController($http, $location, dataService, $routeParams, $scope) {
		var vm = this;
		$scope.test = "test";
		$scope.search = function () {
			$location.path('/search/' + $scope.searchTerm);
		};

		$scope.getCategories = function () {
			$http.get('/getCategories').then(function (data) {
				$scope.categories = data.data;
			});
		};

		$scope.getCategories();
	}
})();