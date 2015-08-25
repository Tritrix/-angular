var GlobalModule = angular.module('GlobalModule', []);

GlobalModule.controller('AppController', function($scope, $timeout, Data) {
   console.log("1. Application Controller loaded"); 
   Data.init();
   console.log("3. data init loaded"); 
    
     $scope.showNotification = function(msg) {
        $( "alert" ).addClass( "alertNotify" );
        $scope.notificationMsg = msg;
          setTimeout(function () 
                   {
                     $scope.$apply(function()
                     {
                       $scope.hideNotification();
                       $( "alert" ).addClass( "alertNotify").removeClass("alertNotify");
                     });
                   }, 3000);  
        console.log(" notification msg --> " + $scope.notificationMsg);
    }
    
    $scope.hideNotification = function(msg) {
        $scope.notificationMsg = "";
    }
});