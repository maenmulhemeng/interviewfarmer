//Import packages
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

//Define Constants
const staticFolder = '/public/';

const homepage = "index.html";
const port = 8081;

//Import Routes
const userRoute = require('./api/Routes/userRoute');

//Use Routes
app.use('/users',userRoute);

// Configure express frameowrk


   // To serve the static html/js/css in public foler
   app.use(express.static("public"));   
   
   // To parse the application/x-www-form-urlencoded    
   var urlencodedParser = bodyParser.urlencoded({ extended: false })
   
   
    
  
    // Launch the app as a web server
    var server = app.listen(port, function () {
        var host = server.address().address
        var port = server.address().port
        
        console.log("Interview server listening at http://%s:%s", host, port)
    });