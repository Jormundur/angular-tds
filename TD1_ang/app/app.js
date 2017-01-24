'use strict';

// Declare app level module which depends on views, and components

var myAppModule = angular.module('myApp', []);


myApp.controller('textController',function() {
      this.nom = " ";
      this.count = function () {
          return 100-nom.length;
      }
});