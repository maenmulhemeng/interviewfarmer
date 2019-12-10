/* This is the web server. We use here express framework which allowing NodeJs
to handle REST application. 
*/

//Import packages
const express = require('express');
const bodyParser = require('body-parser'); // to parse the request body and use it as json object
const constants = require('./Shared/constants');
const app = express();

//Import Routes
const userRoute = require('./api/Routes/userRoute');

//Use Routes
app.use('/users',userRoute);

// Configure express frameowrk

   
    // while for development use this
   app.use(express.static(constants.staticFolder));   
   
   // To parse the application/x-www-form-urlencoded       
   // and to parse the data-form body request we use Multer, check userRoute
   var urlencodedParser = bodyParser.urlencoded({ extended: false })
   

    // Launch the app as a web server
    var server = app.listen(constants.webServerPort, function () {
        var host = server.address().address
        var port = server.address().port
        
        console.log("Interview server listening at http://%s:%s", host, port)
    });