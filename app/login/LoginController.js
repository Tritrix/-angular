var LoginModule = angular.module("LoginModule", []);

LoginModule.controller("LoginController", function ($scope, $state, LoginService, Data, RoutingService) {
    
    console.log("7. Login Controller loaded");
//    RoutingService.goToLogin(RoutingService.checkIfLoggedIn());
    
    $scope.credentials = {username: '', password: ''};
    
    $scope.login = function (credentials) {
            
//        console.log("Credentials--->: " + JSON.stringify(credentials));
        var checkValidity = checkValidResponse(credentials);
            if(checkValidity) {
                var loginPromise = LoginService.doLogin(credentials);
                loginPromise.then(function (data) {
//                    console.log("controller Data: " + JSON.stringify(data));
                    checkLoginResponse(data);
                }, function (error) {
                    console.log("Error: " + JSON.stringify(error));
                    });
            }
            else{
                $scope.anyDirtyAndInvalid = true;
                   setTimeout(function () 
                       {
                         $scope.$apply(function()
                         {
                           $scope.anyDirtyAndInvalid = false;
                         });
                       }, 2000);  
            }
    }      

    /**
     * Private Methods
     **/
    
    function checkValidResponse(credentials) {   
        if( $scope.credentials.email == '' ||  $scope.credentials.password == ''){
             
            var msg = 'Enter Credentials';
            $scope.showNotification(msg);
            return false;
            }
        
        return true;
    }
    
    function checkLoginResponse(data) {
        if(data.loginstatus === "success") {
            updateUserInfo(data);
            RoutingService.goToHome(true);
        } else {
            console.log("error");
            var msg = 'Wrong User Credentials';
            $scope.showNotification(msg);
        }
    }
    
    function updateUserInfo(data) {
        var excludedKeys = ["loginstatus", "id", "token", "username"];
        
        for (var key in data) {
            if (data.hasOwnProperty(key) && (excludedKeys.indexOf(key) !== -1)) {
                Data.addProperty(key, data[key]);
            }
        }
        console.log(JSON.stringify(Data.token));
        
    }
    
    

})