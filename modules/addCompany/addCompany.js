'use strict'
angular.module("myApp").controller('addCompanyController', function($scope, $rootScope) {
    $scope.message = 'Look! I am an about page.';
    $scope.success=false;

    $scope.company={
        id: 0,
        name: "",
        type: "",
        marketCap : "",
        status: "",
        headquarter: "",
        contact: "",
        growth: ""

    };


    $scope.typeList= [
        "Listed",
        "Startup",
        "Bankrupt",
        "Private Limited "
        
    ];

    $scope.statusList= [
        "Open",
        "Pending",
        "Approved",
        "Rejected",
        "On Hold"
    ];


    if($rootScope.id !== undefined){

        angular.forEach($rootScope.companyList, function(val,key){
            
            if(val.id == $rootScope.id){
               $scope.company.id= val.id;
               $scope.company.name= val.companyName;
               $scope.company.type= val.companyType;
               $scope.company.marketCap= val.marketCap;
               $scope.company.status= val.status;
               $scope.company.headquarter= val.address;
               $scope.company.contact= val.keyContact;
               $scope.company.growth= val.lastFYGrowthPerc;
               
            }
        });
    }
   

    $scope.submitForm= function(){

    if($rootScope.id === undefined){    
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
    $scope.message="Company details added Successfully";
    $scope.success=true;
    }
    else{

        angular.forEach($rootScope.companyList, function(val,key){
            
            if(val.id == $rootScope.id){
                $rootScope.companyList[key].companyName= $scope.company.name;
                $rootScope.companyList[key].companyType= $scope.company.type;
                $rootScope.companyList[key].marketCap= $scope.company.marketCap;
                $rootScope.companyList[key].status= $scope.company.status;
                $rootScope.companyList[key].address= $scope.company.headquarter;
                $rootScope.companyList[key].keyContact= $scope.company.contact;
                $rootScope.companyList[key].lastFYGrowthPerc= $scope.company.growth;

               
            }
        });

        $scope.message="Company details updated Successfully";
        $scope.success=true;

    }
    }

});