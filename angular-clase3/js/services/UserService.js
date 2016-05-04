var app = angular.module("app");

app.service("UserService", function($http){

    var extraerData = function(res){
        return res.data;
    };
    
    this.getAll = function(){
        return $http.get("data/data.json").then(extraerData);
    };

});