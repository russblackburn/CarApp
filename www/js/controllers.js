angular.module('starter.controllers', [])

    //injecting cars in dash to load json file before tab-cars page is opened
.controller('DashCtrl', function($scope, Cars) {
})

.controller('CarsCtrl', function($scope, Cars, $cordovaBarcodeScanner) {
  $scope.cars = Cars.all();
        $scope.orderProp = '-year';
        //adding barcode scanner
        $scope.scanBarcode = function() {
            $cordovaBarcodeScanner.scan().then(function(imageData) {

                $scope.barcoderesults = imageData.text;
                document.getElementById("scannerInput").value = imageData.text;

                if (imageData.cancelled == 1) {
                    alert("Cancelled Scan");
                } else {
                    console.log("Scan Not Cancelled ->" + imageData.cancelled);
                }
                //console.log("Barcode Format -> " + imageData.format);
                //console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                console.log("An error happened -> " + error);
            });
        };
})

.controller('CarDetailCtrl', function($scope, $stateParams, Cars) {
  $scope.car = Cars.get($stateParams.carId);
})

.controller('AccountCtrl', function($scope) {
});
