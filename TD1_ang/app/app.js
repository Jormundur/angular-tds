

var myAppModule = angular.module('myAppModule', []);


myAppModule.controller("texteController",function() {
      this.nom = "";
      var self = this;
      this.count = function () {
          return 100-self.nom.length;
      };
      this.save = function(nom){
        this.nom = nom;
      };
});