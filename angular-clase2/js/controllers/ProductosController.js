var app = angular.module("app");

app.controller("ControllerProductos",function($scope,ProductosService){
    
    $scope.tipos = ["phone","accesory","charger","case","tv","service"];
    
    $scope.productos = [];
    
    ProductosService.getAll().then(function(productos){
        $scope.productos = productos;
    });
    
    $scope.filterProducts = { type : "" };
    
    $scope.filterByType = function(tipo){
        $scope.filterProducts.type = tipo !== "" ? tipo : ""; 
    };
    
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 4ce6cb75141f85a2b2c3bacbf2059c52c1458b6a
