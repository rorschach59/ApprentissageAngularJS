

var app = angular.module('factory');
// Les éléments crées par AngularJS sont préfixés d'un $ tandis que les éléments crées par nous ne le sont pas
app.controller('mainController', function($scope, musiciansFactory) {
  // Récupére le tableau de musiciansFactory.js
  $scope.musicians = musiciansFactory.getMusicians();
});﻿
