'use strict';

/* Controllers */

var bollywoodControllers = angular.module('bollywoodControllers', []);

bollywoodControllers.controller('ActorListCtrl', ['$scope', 'ActorsFactory',
  function($scope, ActorsFactory) {
    $scope.actors = ActorsFactory.query();
    $scope.orderProp = 'age';
  }]);

bollywoodControllers.controller('ActorDetailCtrl', ['$scope', '$routeParams', 'ActorsFactory',
  function($scope, $routeParams, ActorsFactory) {
    $scope.actor = ActorsFactory.get({actorId: $routeParams.actorId}, function(actor) {
      $scope.mainImageUrl = actor.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
