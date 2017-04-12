/**
 * Created by Admin-Rémi on 12/04/2017.
 */

var app = angular.module('repeat', []);
app.controller('mainController', function($scope) {
  // .message est en lien avec l'html ligne 9
  $scope.musicians = [
    {id:1, fullName: 'Jimi Hendrix', instrument:'guitare'},
    {id:2, fullName: 'Marcus Miller', instrument:'basse'},
    {id:3, fullName: 'Miles Davis', instrument:'trompette'},
    {id:4, fullName: 'Jacques Higelin', instrument:'piano'}
  ];
});﻿
