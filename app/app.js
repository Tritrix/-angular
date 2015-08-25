/**
 * Angular Application Initialization
 * Main module Gamblers United
 **/

var app = angular.module('Tipster', ['ui.router', 'xeditable', 'ngStorage', 'GlobalModule', 'HomeModule', 'LoginModule', 'SignupModule', 'LogoutModule']);

console.log("config");
app.config(function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});



app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log("States");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/partials/home.html',
            controller: 'HomeController'
        })
    
       .state('login', {
            url: '/login',
            templateUrl: 'app/login/partials/login_.html',
            controller: 'LoginController'
        })
    
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/signup/partials/signup.html',
            controller: 'SignupController'
        })
     
       .state('error', {
            url: '/error/:status/:errorCode',
            templateUrl: 'app/login/partials/login_.html',
            controller: 'ErrorController'
        })
     console.log("States --->");   
});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});