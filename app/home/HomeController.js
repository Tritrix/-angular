var HomeModule = angular.module("HomeModule", []);

HomeModule.controller("HomeController", function ($scope, RoutingService, GetTipListService, GetTipsterListService, GetFollowerListService, GetTipsterProfileService, PostTipEditService, GetVerifyTipsterListService, PostUpdateVerifyTips, Data, $filter) {

    
    RoutingService.goToLogin(RoutingService.checkIfLoggedIn());
    var getList = Data.getUser();
    $scope.userDetails = Data.getUser();

    $scope.statuses = [
        {
            value: 'yes',
            text: 'yes'
        },
        {
            value: 'no',
            text: 'no'
        }
      ];

    /**
     ***** log and allow tips *****
     **/
    var getTipListPromise = GetTipListService.doGetTipList(getList);
    getTipListPromise.then(function (data) {
        $scope.TipList = data;

    }, function (error) {
        console.log("Error: " + JSON.stringify(error));
    });



    /**
     ***** Post Odds and goodtogo *******
     **/

    
    $scope.UpdateTips = function (tp) {
    var tpList = tp;
    console.log('tp list' + JSON.stringify(tpList));

    var UserEditedlist = angular.extend(tpList, getList);
    console.log('UserEditedlist ---->' + UserEditedlist);

    var Editedlist = angular.extend(tpList, UserEditedlist);
    console.log('Editedlist' + JSON.stringify(Editedlist));

    var tipsUpdatePromise = PostTipEditService.doPostTipEditDetails(Editedlist);
    tipsUpdatePromise.then(function (data) {
        
        $scope.tp = data;
        
        var msg = 'Tip Details Updated!';
        $scope.showNotification(msg);
        tpList = '';
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
            var msg = 'Error Updating!' + 'Check Server Connections';
            $scope.showNotification(msg);
        });
    }



    /**
     ***** Verify Tip List *******
     **/
    $scope.verifytipsterlist = function () {
        var verifytipsterListPromise = GetVerifyTipsterListService.doGetVerifyTipsterList(getList);
        verifytipsterListPromise.then(function (data) {
            $scope.VerifyTipsterList = data;
            $scope.vtp = data;
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }



    /**
     ***** Update Verify Tip List *******
     **/

    $scope.UpdateVerifyTips = function (vtp) {
        var vtpList = vtp;
        console.log("vtp list  " + JSON.stringify(vtp));
        
        var userList = Data.getUser();
        console.log(JSON.stringify(userList));
        
        var Editedlist = angular.extend(vtpList, userList);
//        console.log(JSON.stringify(Editedlist));

            console.log('selected' + JSON.stringify(Editedlist) + '---------' + $scope.vtp.status);
        
        
        if (vtp.status == ""){
            var msg = 'Select Status';
            $scope.showNotification(msg);
        }
        else{
            var UpdateVerifyTipsPromise = PostUpdateVerifyTips.doPostUpdateVerifyTips(Editedlist);
                UpdateVerifyTipsPromise.then(function (data) {
                    
                    var msg = 'Status Updated';
                    $scope.showNotification(msg);
                    console.log('return data updated verify tip list' + JSON.stringify(data));
                }, function (error) {
                    console.log("Error: " + JSON.stringify(error));
                });
        }


                
    }




    /**
     ***** Tipster Accounts *******
     **/
    $scope.tipsterlist = function () {
        var tipsterListPromise = GetTipsterListService.doGetTipsterList(getList);
        tipsterListPromise.then(function (data) {

            $scope.TipsterList = data;
            console.log("TipsterList :" + JSON.stringify(data));



            $scope.pickUser = function (credentials) {
                console.log('user info' + JSON.stringify(credentials));
                $scope.profile = credentials;
            }


        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }



    /**
     ***** Follower Accounts *******
     **/
    $scope.followerlist = function () {
        var followerListPromise = GetFollowerListService.doGetFollowerList(getList);
        followerListPromise.then(function (data) {
            $scope.FollowerList = data;
            console.log("Follower List :" + JSON.stringify(data));
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }


});
