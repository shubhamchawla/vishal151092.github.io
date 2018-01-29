'use strict'
angular.module("myApp").controller('addCompanyController', function($scope, $rootScope) {
    $scope.message = 'Look! I am an about page.';


    $scope.companye={};


    $scope.typeList= [
        {id:1, type:"Listed"},
        {id:2, type:"Startup"},
        {id:3, type:"Bankrupt"},
        {id:4, type:"Private Limited "}
        
    ];

    $scope.statusList=[
        {id:1, status:"Open"},
        {id:2, status:"Pending"},
        {id:3, status:"Approved"},
        {id:4, status:"Rejected"},
        {id:5, status:"On Hold"}
    ];


    $scope.submitForm= function(){

        console.log($scope.company);
    var company={
        id: $rootScope.companyList.length+1,
        companyName: $scope.company.name,
        companyType: $scope.company.type,
        marketCap: $scope.company.marketCap,    
        status: $scope.company.status,
        address: $scope.company.headquarter,
        keyContact: $scope.company.contact,
        lastFYGrowthPerc: $scope.company.growth
    };



    $rootScope.companyList.push(company);
    $scope.company={};
    }


});