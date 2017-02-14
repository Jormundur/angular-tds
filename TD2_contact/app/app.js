'use strict';

var ContactApp = angular.module('ContactApp', []);


ContactApp.controller("ContactController",function(){
    var self = this;
    this.operation = "Ajouter";
    this.visible = false;
    this.isDelete = 0;
    this.contacts =  [
        {
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "mail": "mark@facebook.com",
            "delete" : "false"
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "mail": "bill@microsoft.com",
            "delete" : "false"

        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "mail": "Steeve@apple.com",
            "delete" : "false"

        }]

    this.changeOpe=function(){
        self.visible = true;
        if(self.operation == "Ajouter")
          self.operation = "Modifier";
        else
          self.operation = "Ajouter";
    };
    this.setInvisible=function(){
        self.visible = false;
    };
    this.setDelete=function(contact){
            self.isDelete = 1;
            contact.delete = "true";
    };

    this.cancelDelete=function(){
        self.isDelete = 0;
        contacts.delete = "true";
    };
});