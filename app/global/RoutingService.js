GlobalModule.service("RoutingService", function (Data, $state) {

    this.checkIfLoggedIn = function () {
        var user = Data.getUser();
        var isLoggedIn = true;

        if (Object.keys(user).length === 0) {
            isLoggedIn = false;
        }
//        console.log("5. isLoggedIn");
        return isLoggedIn;
    }

    this.goToLogin = function (isLoggedIn) {
        if(!isLoggedIn){
//            console.log("6. Login");
            $state.go('login');
        }
    }
    
    this.goToHome = function (isLoggedIn) {
        if(isLoggedIn) {
//            console.log("home");
            $state.go('home');
        }
    }
});