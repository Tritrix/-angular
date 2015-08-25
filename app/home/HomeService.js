HomeModule.service("GetTipListService", function($http, $q){
    return {
	        doGetTipList: function(getList) {
	            // the $http API is based on the deferred/promise APIs exposed by the $q service
	            // so it returns a promise for us by default
              
	            return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/adminlisttip', getList)
	                .then(function(response) {
	                    if (typeof response.data == 'object' && response.status == '200') {
//                            console.log("response.data");
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


HomeModule.service("GetVerifyTipsterListService", function($http, $q){
    return {
	        doGetVerifyTipsterList: function(getList) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/verifytiplist', getList)
	                .then(function(response) {
	                    if (typeof response.data == 'object' && response.status == '200') {
//                            console.log("Verify TipsterList :" + JSON.stringify(response));
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

HomeModule.service("GetTipsterListService", function($http, $q){
    return {
	        doGetTipsterList: function(getList) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/tipsterlist', getList)
	                .then(function(response) {
                    console.log(response);
	                    if (typeof response.data == 'object' && response.status == '200') {
//                            console.log("TipsterList :" + JSON.stringify(response));
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

HomeModule.service("GetTipsterProfileService", function($http, $q){
    return {
	        doGetTipsterProfile: function(credentials) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/tipsterlist', credentials)
	                .then(function(response) {
                    console.log(response);
	                    if (typeof response.data == 'object' && response.status == '200') {
                            console.log("TipsterList :" + JSON.stringify(response));
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

HomeModule.service("PostTipEditService", function($http, $q){
    return {
	        doPostTipEditDetails: function(Editedlist) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/admintipedit', Editedlist)
	                .then(function(response) {
                    console.log(response);
	                    if (typeof response.data == 'object' && response.status == '200') {
//                            console.log("tip edit details service :" + JSON.stringify(response));
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


HomeModule.service("PostUpdateVerifyTips", function($http, $q){
    return {
	        doPostUpdateVerifyTips: function(Editedlist) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/verifytipupdate', Editedlist)
	                .then(function(response) {
	                    if (typeof response.data == 'object' && response.status == '200') {
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



HomeModule.service("GetFollowerListService", function($http, $q){
    return {
	        doGetFollowerList: function(getList) {
return $http.post('http://dawnshinetech.com/tipster_api/public/api/v1/users/followerlist', getList)
	                .then(function(response) {
                    console.log(response);
	                    if (typeof response.data == 'object' && response.status == '200') {
                            console.log("TipsterList :" + JSON.stringify(response));
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