CarApp
======

This app is for both shoppers and dealerships.

When a shopper arrives at a participating dealership, the app will use their phones geolocation to automatically load the dealerships information and a list of all their cars at that location.

When the shopper is not at one of the locations, a list of featured cars will populate so that shoppers can still browse cars at home.  The featured car list is comprised of cars from multiple dealerships that pay extra for the ability to show their stock to customers at home.

Currently the geolocations set are both at Utah Valley University, the first is set at the **Computer Science Building** and the other at the **Sorensen Center**.

*Directions to run this app*

##1. Install##

    $ npm install -g ionic
    $ npm install -g cordova ionic
    
##2. Clone##

    $ cd <choose a location>
    $ git clone https://github.com/russblackburn/CarApp.git
    
##3. Serve/Emulate/Run##

    Serve In Browser
    $ ionic serve

    Emulate IOS
    $ ionic platform add ios
    $ ionic build ios
    $ ionic emulate ios

    Run
    $ ionic build ios
    (if running directly from Xcode open "platforms/ios" in Xcode and press play to run or follow the next step to run from the terminal)
    $ ionic run ios

##4. Plugins##

    To use the plugins add the following after you have added your platforms

    Barcode Scanner
    $ cordova plugin add https://github.com/wildabeast/BarcodeScanner.git

    GeoLocation Services
    $ cordova plugin add org.apache.cordova.geolocation

    (This app relies on the GeoLocation plugin to work)

##5. Troubleshoot Plugins##

    If the plugins are not working you will need to delete a file, directory and follow a few other steps

    1. Delete file /plugins/ios.json
    2. Delete directory /platforms/ios
    3. then $ ionic platform add ios
    4. then $ ionic build ios
    5. then $ ionic run ios

    This should force the ios.json file to recompile and add the scanner plugin

    (if running directly from Xcode, build an ios version and open directory "platforms/ios" in Xcode)
