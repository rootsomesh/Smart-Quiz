var app = angular.module('AppMarketApp', ['ngRoute']);

app.config( ['$routeProvider', function ($routeProvider) {
   $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'finalview/home.html',
         
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'finalview/loginview.html',
               
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'finalview/registerview.html',
                
            })
           .otherwise({ redirectTo: '/register' });

}]);
