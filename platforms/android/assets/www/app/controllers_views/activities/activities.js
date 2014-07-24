angular.module('freshly.activities', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.activities', {
    url: '/activities',
    views: {
      'app-activities': {
        templateUrl: 'app/controllers_views/activities/app-activities.html',
        controller: 'ActivitiesController'
      }
    }
  })
})

.controller('ActivitiesController', function($scope, Activities) {

  //Gets the activities list from the database
  //so the view can be updated
  $scope.refreshActivities = function() {
    return Activities.getActivities().then(function(response) {
      $scope.activities = response.data;
    });
  };

  //Refreshes the activity list so it can be viewed
  $scope.activities = [];
  $scope.imageData = {};
  $scope.refreshActivities().catch(function(err) {
    console.log(err);
  });

});