(function () {
	angular
		.module('app')
		.controller('addPolicyController', addPolicyController);

	addPolicyController.$inject = ['$http', '$location', 'dataService', 'FileUploader'];

	function addPolicyController($http, $location, dataService, FileUploader) {
		var vm = this;
		vm.uploader = new FileUploader();
		vm.policy = {
			title: "",
			description: "",
			active: true,
			tags: "",
			additionalInfo: [{
				title: "",
				text: "",
				active: true
			}],
			category:{
				name: "",
				active: "",
				subcategory: {
					name: "",
					active: true
				}
			},
			steps: [{
				"text": "",
				"ordering": 1,
				"adminNotes": "",
				"active": true,
				"image": ""
			}],
			links: [{
				"title": "link",
				"href": "",
				"active": true
			}]
		};
		vm.currentUser = {};
		vm.stepObject = {
			"text": "",
			"ordering": 1,
			"adminNotes": "",
			"active": true
		};
		vm.linkObject = {
			"title": "link",
			"href": "",
			"active": true
		};
		vm.links = [];
		vm.steps = [];

		function init(){
		}

		vm.addStep = function(){
			var stepObject = {
				"text": "",
				"ordering": vm.policy.steps.length + 1,
				"adminNotes": "",
				"active": true
			};
			vm.policy.steps.push(stepObject);
		};
		vm.removeStep = function(index){
			vm.policy.steps.splice(index, 1);
		};

		vm.addLink = function(){
			var linkObject = {
				"title": "link",
				"href": "",
				"active": true
			};
			vm.policy.links.push(linkObject);
		};
		vm.removeLink = function(index){
			vm.policy.links.splice(index, 1);
		};

		vm.addInfo = function(){
			var infoObject = {
				title: "",
				text: "",
				active: true
			};
			vm.policy.additionalInfo.push(infoObject);
		};

		vm.removeInfo = function(index){
			vm.policy.additionalInfo.splice(index, 1);
		};

		vm.checkUpload = function(){
			console.log(vm.image);
		};

		vm.submitPolicy = function(){
			console.log(vm.policy);
			$http.post('/addPolicy', vm.policy).then(function (data) {
				vm.policy = {
					title: "",
					description: "",
					active: true,
					tags: "",
					additionalInfo: [{
						title: "",
						text: "",
						active: true
					}],
					category:{
						name: "",
						active: "",
						subcategory: {
							name: "",
							active: true
						}
					},
					steps: [{
						"text": "",
						"ordering": 1,
						"adminNotes": "",
						"active": true
					}],
					links: [{
						"title": "link",
						"href": "",
						"active": true
					}]
				};
			});
		};

		vm.cancel = function(){
			$location.path('/home');
		};
		init();
	}
})();