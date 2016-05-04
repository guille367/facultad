angular.module("app", ["ui.router"])

	.config(function($stateProvider, $urlRouterProvider){
		
		$stateProvider

			.state("usuarios", {
				url: "/usuarios",
			  templateUrl: "js/templates/UserTemplate.html",
			  controller: "UserController"
			})
		
			.state("productos", {
				url: "/productos",
			  templateUrl: "js/templates/ProductTemplate.html",
			  controller: "ProductController"
			});
	
		$urlRouterProvider.otherwise("/usuarios");
	
	});