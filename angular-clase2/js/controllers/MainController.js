angular.module("app")

		.controller("MainController", function($scope, UsuarioService){

				$scope.filterActive = { country: "" };

				$scope.paises = [
						"Argentina",
						"Chile",
						"Peru",
						"Paraguay",
						"Todos"
				];

				$scope.usuarios = [];

				UsuarioService.getAll()
						.then(function(res){
								$scope.usuarios = res;
						})
		
				$scope.filterByCountry = function (country) {
						$scope.filterActive.country = country !== "Todos" ? country : "";
				}
		});