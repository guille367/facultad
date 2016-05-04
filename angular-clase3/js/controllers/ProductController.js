angular.module("app")
	.controller("ProductController", function($scope, ProductService){

		$scope.filterActive = { type: "" };

		$scope.types = [
			"phone",
			"warranty",
			"service",
      "todos"
		];

		$scope.productos = [];

		ProductService.getAll()
			.then(function(res){
				$scope.productos = res;
			})

		$scope.filterByType = function (type) {
			$scope.filterActive.type = type !== "todos" ? type : "";
		}
	});