angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Cars', function($http) {
  // Might use a resource here that returns a JSON array

  // Adding http request to load json file
    var cars = [];
    $http.get('data/cars.json').success(function(data){
        cars = data;
    });

  return {
    all: function() {
      return cars;
    },
    get: function(carId) {
      // Simple index lookup
      return cars[carId];
    }
  }
});
