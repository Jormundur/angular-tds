'use strict';

var ContactApp = angular.module('ContactApp', []);


ContactApp.controller("ContactController", function (){
    var self = this;
    this.operation = "Ajouter";
    this.visible = false;
    this.isDelete = 0;
    this.contacts =  [
        {
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "mail": "mark@facebook.com",
            "delete" : false
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "mail": "bill@microsoft.com",
            "delete" : false

        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "mail": "Steeve@apple.com",
            "delete" : false

        }]
    this.contact = [];

this.tmpContact =
    {
        "nom" : "",
        "prenom" : "",
        "mail" : "",
    }

    this.modifContact=function(contact){
    self.contact = contact;
        self.visible = true;
        self.operation = "Modifier";
        self.tmpContact.nom = contact.nom;
        self.tmpContact.prenom = contact.prenom;
        self.tmpContact.mail = contact.mail;

    }

    this.changeAjout=function(){
        self.visible = true;
        self.operation = "Ajouter";
    };

this.addContact=function(){
    if(self.operation == "Modifier")
        self.modif();
    else {
        self.contacts.push(angular.copy(self.tmpContact));}
        self.visible = false;
        self.tmpContact.nom = "";
        self.tmpContact.prenom = "";
        self.tmpContact.mail = "";

    };

this.modif=function(){
    self.contact.nom = angular.copy(self.tmpContact.nom);
    self.contact.prenom = angular.copy(self.tmpContact.prenom);
    self.contact.mail = angular.copy(self.tmpContact.mail);

};

    this.setInvisible=function(){
        self.visible = false;
    };
    this.setDelete=function(contact){
            self.isDelete = 1;
            contact.delete = true;
    };

    this.countDel=function(){
        var compteur = 0;
        for (var i = 0;i<self.contacts.length;i++){
            if(self.contacts[i].delete == true)
                compteur++;
        }
        return compteur;


            }
    this.cancelDelete=function(){
        self.isDelete = 0;
        for (var i = 0;i<self.contacts.length;i++)
        self.contacts[i].delete = false;
    };
});

ContactApp.filter('filtring',function(){
    return function(items){
        var result=[];
        for(var i=0;i<items.length;i++){
            if(!items[i].delete)
                result.push(items[i]);
        }
        return result;
    };
});