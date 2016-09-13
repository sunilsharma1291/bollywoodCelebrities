'use strict';

/* App Module */

var bollywoodApp = angular.module('bollywoodApp', [
  'ngRoute',
  'bollywoodAnimations',

  'bollywoodControllers',
  'bollywoodFilters',
  'bollywoodServices'
]);

bollywoodApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/actors', {
        templateUrl: 'partials/bollywood-list.html',
        controller: 'ActorListCtrl'
      }).
      when('/actors/:actorId', {
        templateUrl: 'partials/bollywood-detail.html',
        controller: 'ActorDetailCtrl'
      }).
      otherwise({
        redirectTo: '/actors'
      });
  }]);
