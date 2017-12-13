(function () {
	angular
		.module('app')
		.controller('searchController', searchController);

	searchController.$inject = ['$http', '$location', 'dataService', '$routeParams'];

	function searchController($http, $location, dataService, $routeParams) {
		var vm = this;
		vm.search = $routeParams.search;
		function init(){
			getSearchedPolicies();
		};

		function getSearchedPolicies(){
			$http.post('/searchPolicies/', {
				search: vm.search
			}).then(function (data) {
				vm.results = data.data;
				console.log(vm.results);
			});
		}
		vm.viewPolicy = function(name){
			$location.path('/policy/' + name);
		}
		init();
	};
})();