var app = angular.module("app");

app.controller("ControllerProductos",function($scope,ProductosService){
    
    $scope.tipos = ["phone","accesory","charger","case","tv","service"];
    
    $scope.productos = [];
    
    ProductosService.getAll().then(function(productos){
        $scope.productos = productos;
    });
    
    var filterProducts = { type : "" };
    
    $scope.filterByType = function(tipo){
        return filterProducts.type = tipo !== "" ? tipo : ""; 
    };
    
});