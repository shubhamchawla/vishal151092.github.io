'use strict'
angular.module("myApp").controller('homeController', function($scope, $rootScope, $location) {
   
    $rootScope.id=undefined;

    $scope.editCompany=function(id){

        $rootScope.id= id;
        $location.path( "/addCompany" );
    };

    $scope.removeCompany=function(id){

        angular.forEach($rootScope.companyList, function(val,key){
            
            if(val.id == id){
                $rootScope.companyList.splice(key,1);
            }
        });
    };


});