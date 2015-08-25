LogoutModule.service("LogoutService", function ($http, $q) {
    return {
        doLogout: function (user) {
        return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/tipsterlogout', user)
        .then(function (response) {
                if (typeof response.data === 'object' )
                    {
                        return response.data;
                    }else {
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
