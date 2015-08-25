SignupModule.service("SignupService", function($http, $q){
    return {
	        doSignup: function(userData) {
	            // the $http API is based on the deferred/promise APIs exposed by the $q service
	            // so it returns a promise for us by default
                console.log('Service: ' + JSON.stringify(userData));
	            return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/adminlogin', userData)
	                .then(function(response) {
                    console.log(response);
	                    if (typeof response.data == 'object' && response.status == '200') {
                            console.log("response.data" + JSON.stringify(response));
	                        return response.data;
	                    } else {
	                        // invalid response
                            console.log("response.data error");
	                        return $q.reject(response.data);
	                    }

	                }, function(response) {
	                    // something went wrong
                            console.log("error");
	                    return $q.reject(response.data);
	            	});
	        }
	    };
});