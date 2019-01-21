
(function () {
    'use strict';
var App = angular.module("App",[]);
App.controller("firstController",['$scope','$http',function($scope,$http){
    console.log("in my controller");
    $scope.newUser={};
        $scope.add=function(){
              var newUser=angular.toJson($scope.person);
             console.log($scope.person.name);
        $http.post('route/add',newUser)
            .then(function(response){
                console.log("USer Created");
            })
     
    }
}]);
   
})();


