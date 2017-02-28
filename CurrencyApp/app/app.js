'use strict';

var CurrencyApp = angular.module('CurrencyApp', []);

angular.module("CurrencyApp").controller("currencyController",['$http', function($http) {

    this.currencies= "";
    this.from= "";
    this.to= "";
    this.what= "";
    this.result= "";


    $http.get('app/data/currencymap.json').
        then(function(data, status, headers, config) {
        self.currencies = data;
    }).
    error(function(data, status, headers, config) {
        console.log("Erreur avec le statut Http : "+status);
    });







}]);

angular.module('httpExample', [])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://free.currencyconverterapi.com/**'
        ]);
    }]);

$http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+from.code+'_'+to.code, {jsonpCallbackParam: 'callback'})
    .then(function(response) {
        self.result=response.data[self.from.code+'_'+self.to.code].val;
       // ...
    });