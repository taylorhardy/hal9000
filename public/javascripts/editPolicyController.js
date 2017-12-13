(function () {
	angular
		.module('app')
		.controller('editPolicyController', editPolicyController);

	editPolicyController.$inject = ['$http', '$location', 'dataService'];

	function editPolicyController($http, $location, dataService) {
		var vm = this;
		function init(){
			getPolicies()
		}

		function getPolicies(){
			$http.get('/getPolicies').then(function (data) {
				vm.policyName = data.data;
			})
		}

		vm.querySearch = function(query) {
			var results = query ? vm.policyName.filter( createFilterFor(query) ) : vm.policyName, deferred;
			return results;

		};
		vm.buildPolicy = function(name){
			$http.post('/getPolicy', {
				name: name
			}).then(function (data) {
				vm.policy = data.data;
				console.log(vm.policy);
			});
		};

		vm.savePolicy = function(){
			$http.post('/editPolicy', vm.policy).then(function (data) {
				console.log(vm.policy);
				//vm.searchText = "";
				//vm.policy = {};
			});
		};
		vm.cancel = function () {
			$location.path('/home');
		};
		function createFilterFor(query) {
			var lowercaseQuery = angular.lowercase(query);
			return function filterFn(item) {
				return (item.title.toLowerCase().indexOf(lowercaseQuery) === 0);
			};
		}
		init()
	}
})();