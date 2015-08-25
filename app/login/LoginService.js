LoginModule.service("LoginService", function ($http, $q) {
    return {
        doLogin: function (credentials) {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default

            return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/adminlogin', credentials)
                .then(function (response) {
                    if (typeof response.data == 'object' && response.status == '200') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    };
});
