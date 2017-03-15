/**
 * Created by djdapz on 3/31/16.
 */
var appController = function($scope, $http, EmailService){

    $scope.weeks = [ 
        { 
            "title": "Update: Feb 10", 
            "items": [ 
                "Enabled logging of heart rate and accelerometer on smart watch", 
                "Moved logging to background service", 
                "Communicated logged data to phone (need to make persistent still)", 
                "Google fit integration in progress", 
                "Google account configured for project", 
                "Game interface in progress" 
            ]  
        }, 
        { 
            "title": "Update: Feb 17", 
            "items": [ 
                "Completed Rough Draft of paper", 
                "Created login and splash screen", 
                "Fixed instability in interface"  
            ]  
        }, 
        { 
            "title": "Update: Feb 24", 
            "items": [ 
                "Google Fit integrated", 
                "Heart Rate, Calories, and Steps automatically upload to raw data table", 
                "Fixed more inteface bugs", 
                "MVPA Calculator launched", 
                "Python script launched to convert data collected at various different intervals to one format", 
                "Backend fills in empty data-points using mean reversion", 
                "1 experiment run", 
                "Basic Threshold classifier in place - will improve when we run more experiments"   
            ]  
        }, 
        { 
            "title": "Update: March 6", 
            "items": [ 
                "Study started with 4 users February 28", 
                "Fixed various bugs that were uncovered during the study", 
                "Transitions from time based check-in to button activated checkin to facilitate debugging and make the app safer.", 
                "MVPA Classifier finished and tuned parameters" 
            ]  
        }  ];


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
