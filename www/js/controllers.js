angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CarsCtrl', function($scope, Cars) {
  $scope.cars = Cars.all();
})

.controller('CarDetailCtrl', function($scope, $stateParams, Cars) {
  $scope.car = Cars.get($stateParams.carId);
})

.controller('AccountCtrl', function($scope) {
});
