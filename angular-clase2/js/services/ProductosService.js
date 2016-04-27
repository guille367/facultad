var app = angular.module("app");

app.service("ProductosService",function($http){
            
    var getProducts = function(d){
        return d.data;
    };
    
 this.getAll = function(){
     return $http.get("data/products.json").then(getProducts);
 };
            
});