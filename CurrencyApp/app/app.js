'use strict';

//var CurrencyApp = angular.module('CurrencyApp', []);


angular.module('CurrencyApp', [])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://free.currencyconverterapi.com/**'
        ]);
    }]);







angular.module("CurrencyApp").controller("currencyController",['$http', function($http) {
    var self = this;
    this.from;
    this.to;
    this.what= 1;
    this.result;
    this.temp;

    $http.get('data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
            self.from = self.currencies.EUR;
            self.to = self.currencies.USD;

        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });
    this.swap=function(){
        self.temp = self.from;
        self.from = self.to;
        self.to = self.temp;
    };

    this.getResult=function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                self.result=response.data[self.from.code+'_'+self.to.code].val*self.what;
               // ...
            });
  };

}]);



