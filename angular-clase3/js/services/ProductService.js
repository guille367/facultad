var app = angular.module("app");

app.service("ProductService", function($http){

    var extraerData = function(res){
        return res.data;
    };

    this.getAll = function(){
        return $http.get("data/products.json").then(extraerData);
    };

});