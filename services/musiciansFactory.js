var app = angular.module('factory', []);

app.factory("musiciansFactory", function () {
  var musicians = [
    {id:1, fullName: 'Jimi Hendrix', instrument:'guitare'},
    {id:2, fullName: 'Marcus Miller', instrument:'basse'},
    {id:3, fullName: 'Miles Davis', instrument:'trompette'},
    {id:4, fullName: 'Jacques Higelin', instrument:'piano'}
  ];

  var getMusicians = function() {
    return musicians;
  };

  var addMusician = function(musician) {
    musician = prepareMusician(musician);
    musicians.push({id:musician.id, fullName:musician.fullName, instrument:musician.instrument});
  };

  // Ajoute un id au nouveau musicien
  function prepareMusician(musician) {
    musician.id = musicians.length +1;
    return musician;
  }
  // En faisant ceci, getMusicians devient public alors que musicians est privé, ce qui nous permet d'accéder au tableau musicians n'importe ou
  return {
    getMusicians: getMusicians,
    addMusician: addMusician
  };
});
