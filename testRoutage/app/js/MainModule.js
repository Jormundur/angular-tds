angular.module("sampleApp").config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'MainController',
            controllerAs:'mainCtrl'
        });
        when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'MainController',
            controllerAs:'mainCtrl'
        });
        when('/exit', {
            templateUrl: 'templates/in/exit.html',
            controller: 'MainController',
            controllerAs:'mainCtrl'
        }).otherwise({
            redirectTo: '/main.html'
        });

    }]);