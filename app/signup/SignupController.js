var SignupModule = angular.module("SignupModule", []);

SignupModule.controller("SignupController", function ($scope, SignupService, $state) {
    console.log('Signup controller loaded');

    $scope.userData = {
        username: '',
        email: '',
        mobile: '',
        country: '',
        password: '',
        confirmPassword: ''
    };

    $scope.originalSignUpData = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    $scope.signup = function (userData) {
        var checkInputValidity = checkInputValidityResponse(userData);
        if (checkInputValidity.isValid) {
            var signupPromise = SignupService.doSignup(userData);
            signupPromise.then(function (data) {
//                $scope.userData = angular.copy($scope.originalSignUpData);
//                $scope.signupForm.$rollbackViewValue();
//                $scope.signupForm.$setPristine();
//                $scope.signupForm.$setUntouched();
//                $scope.signupForm.$setValidity();
//                $scope.signupFormSubmitted = false;
                verifyResponse(data);
            }, function (error) {
                var msg = 'There was a server error. Try again later.';
                $scope.showNotification(msg);
            });
        }
    }

    /**
     * Checks Email and password Fields Empty
     **/
    function checkInputValidityResponse(userData) {
        var errValidation = {
            isValid: false,
            msg: ""
        };
        if (!userData.username === '' || userData.username === '') {
            errValidation.msg = "First Name is invalid";
            return errValidation;
        }
        if (!userData.email === '' || userData.email === '') {
            errValidation.msg = "Last Name is invalid";
            return errValidation;
        }
        if (!userData.mobile === '' || userData.mobile === '') {
            errValidation.msg = "Email is invalid";
            return errValidation;
        }
        if (!userData.country === '' || userData.country === '') {
            errValidation.msg = "First Name is invalid";
            return errValidation;
        }
        errValidation.isValid = true;
        return errValidation;
    }


    /**
     * PATTERN validation for signup email address
     **/
    function validateEmail(userData) {
        var ck_email = /^\s*[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,5}$/;
        return ck_email.test(userData.email);
    }


    /**
     * Signup Succes or Failure
     **/
    function verifyResponse(data) {
        if (data.status === "success") {
            var msg = "Successfully Registered";
            $scope.showNotification(msg);
        } else {
//            ErrorService.doErrorAlert($scope, data);
        }
    }
});