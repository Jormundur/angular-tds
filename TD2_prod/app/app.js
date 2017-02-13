var ListesApp = angular.module('ListesApp', []);


ListesApp.controller("prodController",function(){
  var self = this;
  this.Items =
        [
            {
                "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
                "title": "50 Must-have plugins for extending Twitter Bootstrap",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
                "title": "Making a Super Simple Registration System With PHP and MySQL",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
                "title": "Create a slide-out footer with this neat z-index trick",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/06/digital-clock/",
                "title": "How to Make a Digital Clock with jQuery and CSS3",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
                "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
                "title": "Mini AJAX File Upload Form",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
            },
            {
                "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
                "title": "Your First Backbone.js App – Service Chooser",
                "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
            }
        ]
    this.dispoItems = this.Items;
    this.includedItems=[];
    this.selectedDispoItems=[];
    this.selectedIncludedItems=[];

    this.step = 1;

    this.addToIncluded = function(){
      for(var i = 0;i<self.selectedDispoItems.length;i++)
            self.includedItems.push(self.selectedDispoItems[i]);
      for(var y = 0;y<self.selectedDispoItems.length;y++){
        var n = self.dispoItems.indexOf(self.selectedDispoItems[y]);
        self.dispoItems.splice(n,1)}
    };

    this.removeFromIncluded = function(){
        for(var i = 0;i<self.selectedIncludedItems.length;i++)
            self.dispoItems.push(self.selectedIncludedItems[i]);
        for(var y = 0;y<self.selectedIncludedItems.length;y++){
            var n = self.includedItems.indexOf(self.selectedIncludedItems[y]);
            self.includedItems.splice(n,1)}

    };

    this.addAllToIncluded=function(){
        for(var i=0;i<self.dispoItems.length;i++)
            self.includedItems.push(self.dispoItems[i])
        self.dispoItems=[];
    };

    this.RemoveAllFromIncluded=function(){
        for(var i=0;i<self.includedItems.length;i++)
            self.dispoItems.push(self.includedItems[i])
        self.includedItems=[];
    };

    this.etape=function(){
        if(this.step==1){
            this.step=2;
        }
        else this.step=1;
    };

});