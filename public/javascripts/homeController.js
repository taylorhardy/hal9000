(function () {
	angular
		.module('app')
		.controller('homeController', homeController);

	homeController.$inject = ['$http', '$location', 'dataService'];

	function homeController($http, $location, dataService) {
		var vm = this;
		vm.test = "test";
		vm.currentUser = {};
		vm.checklists = [];

		function init() {
			getMyChecklists();
		}

		function getMyChecklists() {
			$http.get('/getMyChecklists', {}).then(function (data) {
				vm.checklists = data.data;
			});
		}

		init();
	};
})();