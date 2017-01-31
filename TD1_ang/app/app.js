

var myAppModule = angular.module('myAppModule', ['ngCookies']);


myAppModule.controller("texteController",["$cookies",function($cookies){
      this.nom = $cookies.get('test') ||"";
      this.vnote = "";
      var self = this;
      this.count = function () {
          return 100-self.nom.length;
      };
      this.clear = function(){
        this.nom = "";
        this.vnote = "";
      };
      this.save = function(){
          this.vnote = "Note sauvegardée";
          $cookies.put('test',this.nom);
      };
    this.change = function(){
        this.vnote = "Note changée";
    };
    this.couleur = function(){
        if(this.vnote == "Note sauvegardée")
            return "alert-success";
        if(self.nom.length >= 50 && self.nom.length < 80)
            return "alert-warning";
        if(self.nom.length >= 80)
            return "alert-danger";
        else
            return "alert-success";
                };
}]);