angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Nissan', function($http) {
  // Might use a resource here that returns a JSON array

  // Adding http request to load json file
    var nissan = [];
    $http.get('data/nissan.json').success(function(data){
        nissan = data;
    });

  return {
    all: function() {
      return nissan;
    },
    get: function(carId) {
      // Simple index lookup
      return nissan[carId];
    }
  }
})

.factory('Featured', function($http) {
  // Might use a resource here that returns a JSON array

  // Adding http request to load json file
  var featured = [];
  $http.get('data/featured.json').success(function(data){
    featured = data;
  });

  return {
    all: function() {
      return featured;
    },
    get: function(carId) {
      // Simple index lookup
      return featured[carId];
    }
  }
})

.factory('Volkswagen', function($http) {
  // Might use a resource here that returns a JSON array

  // Adding http request to load json file
  var volkswagen = [];
  $http.get('data/volkswagen.json').success(function(data){
    volkswagen = data;
  });

  return {
    all: function() {
      return volkswagen;
    },
    get: function(carId) {
      // Simple index lookup
      return volkswagen[carId];
    }
  }
});
