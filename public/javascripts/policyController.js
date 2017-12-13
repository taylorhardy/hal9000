(function () {
	angular
		.module('app')
		.controller('policyController', policyController);

	policyController.$inject = ['$http', '$location', 'dataService', '$routeParams'];

	function policyController($http, $location, dataService, $routeParams) {
		var vm = this;
		vm.policyName = $routeParams.name;
		vm.currentUser = {};
		vm.policy = {};
		function init(){
			getPolicy();
		};

		function getPolicy(){
			console.log(vm.policyName);
			$http.post('/getPolicy', {
				name: vm.policyName
			}).then(function (data) {
				vm.policy = data.data;
				console.log(vm.policy);
			});
		}
		init();
	};
})();