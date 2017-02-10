/**
 * Created by djdapz on 3/31/16.
 */
var appController = function($scope, $http, EmailService){

    $scope.weeks = [
        {
            "title": "Update: Feb 6",
            "items": [
                "Enabled logging of heart rate and accelerometer on smart watch",
                "Moved logging to background service",
                "Communicated logged data to phone (need to make persistent still)",
                "Wrking on getting data from google fit (it's not finished but we're making progress)",
                "Google account configured for project",
                "Game interface in progress"
            ]
        }

    ];


    $scope.contact = {
        email: undefined,
        name: undefined,
        message: undefined
    };

    $scope.state = {
        email_status:"RESTING",
        error: false
    };


    var init = function(){

    };



    $scope.lookIn = function(){
        1+1;
    };

};

/* recommended */
angular
    .module('app')
    .controller("appController", appController);

appController.$inject = ['$scope', "$http", 'EmailService'];
