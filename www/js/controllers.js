angular.module('starter.controllers', [])

    //injecting cars in dash to load json file before tab-cars page is opened
.controller('DashCtrl', function($scope, $http, Cars) {
        $http.get('data/featured.json').success(function(data){
            $scope.featured = data;
            $scope.orderProp = '-year';
        });

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

.controller('CarDetailCtrl', function($scope, $stateParams, Cars, $ionicModal, $ionicSlideBoxDelegate) {
  $scope.car = Cars.get($stateParams.carId);

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });

})

.controller('AccountCtrl', function($scope) {
});
