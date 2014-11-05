angular.module('starter.controllers', [])

    //injecting cars in dash to load json file before tab-cars page is opened
.controller('DashCtrl', function($scope, Cars) {
})

.controller('CarsCtrl', function($scope, Cars) {
  $scope.cars = Cars.all();
        $scope.orderProp = '-year';
})

.controller('CarDetailCtrl', function($scope, $stateParams, Cars) {
  $scope.car = Cars.get($stateParams.carId);
})

.controller('AccountCtrl', function($scope) {
});
