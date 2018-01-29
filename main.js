'use strict'

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/home/home.html", controller:'homeController'
    })
    .when("/red", {
        templateUrl : "modules/addCompany/addCompany.html", controller:'addCompanyController'
    })
    .when("/green", {
        templateUrl : "modules/analytics/analytics.html", controller: 'analyticsController'
    });
    
});


app.controller('mainController', function($scope, $rootScope){

    
$rootScope.companyList = [

    {
        id:1,
        companyName: "TCS",
        companyType: {id:1,type:"Listed"},
        marketCap: 2400,
        status: {id:2,status:"Pending"},
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 16.5
    },
    {
        id:1,
        companyName: "Infosys",
        companyType: {id:1,type:"Listed"},
        marketCap: 2800,
        status: {id:2,status:"Pending"},
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 11.5
    },
    {
        id:1,
        companyName: "Mphasis",
        companyType: {id:1,type:"Listed"},
        marketCap: 20,
        status: {id:2,status:"Pending"},
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 20.5
    },
    {
        id:1,
        companyName: "Newgen",
        companyType: {id:1,type:"Listed"},
        marketCap: 2,
        status: {id:2,status:"Pending"},
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 30.5
    }
    
    
    ];
    
    
});





