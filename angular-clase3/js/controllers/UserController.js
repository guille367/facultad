angular.module("app")
	.controller("UserController", function($scope, $state, UserService){

		$scope.filterActive = { country: "" };

		$scope.paises = [
			"Argentina",
			"Chile",
			"Peru",
			"Paraguay",
			"Todos"
		];

		$scope.usuarios = [];

		UserService.getAll()
			.then(function(res){
				$scope.usuarios = res;
			})

		$scope.filterByCountry = function (country) {
			$scope.filterActive.country = country !== "Todos" ? country : "";
		}
	});