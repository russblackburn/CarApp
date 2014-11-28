angular.module('starter.controllers', [])

    //injecting cars in dash to load json file before tab-cars page is opened
.controller('DashCtrl', function($scope, $http, $cordovaGeolocation, Cars, testdealer, Featured) {

        $http.get('data/dealer.json').success(function(data){
            var dealer = data;

            $cordovaGeolocation
                .getCurrentPosition()
                .then(function (position) {
                    var lat  = position.coords.latitude;
                    var long = position.coords.longitude;

                    //dealer1
                    if(lat >= 1){
                        var positionResults = 1;
                        findDealerObject(positionResults);
                    }
                    //dealer2
                    else if(lat <= 1){
                        var positionResults = 2;
                        findDealerObject(positionResults);
                    }
                    //featured cars
                    else{
                        var positionResults = 0;
                        findDealerObject(positionResults);
                    }
                    $scope.cars = positionResults;
                }, function(err) {
                    // error
                });

            function findDealerObject(positionResults){
                for (var key in dealer) {
                    if (dealer.hasOwnProperty(key)) {
                        if (positionResults == dealer[key]['id']) {
                            $scope.dealers = dealer[key];
                        }
                    }
                }
            }

        });

})

.controller('CarsCtrl', function($cordovaGeolocation, $scope, $cordovaBarcodeScanner, Cars, testdealer, Featured) {
  //$scope.cars = Cars.all();
        $scope.orderProp = '-year';


        $cordovaGeolocation
            .getCurrentPosition()
            .then(function (position) {
                var lat  = position.coords.latitude;
                var long = position.coords.longitude;

                //dealer1
                if(lat >= 1){
                    var positionResults = Cars.all();
                }
                //dealer2
                else if(lat <= 1){
                    var positionResults = testdealer.all();
                }
                //featured cars
                else{
                    var positionResults = Featured.all();
                }
                $scope.cars = positionResults;
            }, function(err) {
                // error
            });



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
