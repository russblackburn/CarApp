CarApp
======

*Directions to run this app*

##1. Install##

    $ sudo npm install -g ionic
    $ sudo npm install -g cordova ionic
    
##2. Clone##

    $ cd <choose a location>
    $ git clone https://github.com/russblackburn/CarApp.git
    
##3. Emulate/Serve##

    Emulate IOS
    $ ionic platform add ios
    $ ionic build ios
    $ ionic emulate ios
    
    Run In Browser
    $ ionic serve

##4. Plugin##

    To use the barcode scanner add the following plugin after you have added your platforms

    Barcode Scanner
    $ cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
