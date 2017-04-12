/**
 * Created by Admin-Rémi on 12/04/2017.
 */

var app = angular.module('controller', []);
app.controller('mainController', function($scope) {
  // .message est en lien avec l'html ligne 9
  $scope.message = 'Hello depuis le controller';
});﻿
