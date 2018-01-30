'use strict'

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/home/home.html", controller:'homeController'
    })
    .when("/addCompany", {
        templateUrl : "modules/addCompany/addCompany.html", controller:'addCompanyController'
    })
    .when("/analytics", {
        templateUrl : "modules/analytics/analytics.html", controller: 'analyticsController'
    });
    
});


app.controller('mainController', function($scope, $rootScope){

    
$rootScope.companyList = [

    {
        id:1,
        companyName: "TCS",
        companyType: "Listed",
        marketCap: 2400,
        status: "Pending",
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 16.5
    },
    {
        id:2,
        companyName: "Infosys",
        companyType: "Listed",
        marketCap: 2800,
        status: "Pending",
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 11.5
    },
    {
        id:3,
        companyName: "Mphasis",
        companyType: "Listed",
        marketCap: 20,
        status: "Pending",
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 20.5
    },
    {
        id:4,
        companyName: "Newgen",
        companyType: "Listed",
        marketCap: 2,
        status: "Pending",
        address: "Mumbai Air India Buildinng",
        keyContact: "N Chandra",
        lastFYGrowthPerc: 30.5
    }
    
    
    ];
    
    
});





