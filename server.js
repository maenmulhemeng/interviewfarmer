/* This is the web server. We use here express framework which allows NodeJs
to handle REST application. 
*/

//Import packages
var createError = require('http-errors');
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
   //app.set('view engine', 'html');
   // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        
        next(createError(404,'Page Not Found - 404'));
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        // render the error page
        res.status(err.status || 500);
        console.log(err)
        res.json({
            message: err.message,
            error: err
          });
    });
    // Launch the app as a web server
    var server = app.listen(constants.webServerPort, function () {
        var host = server.address().address
        var port = server.address().port
        
        console.log("Interview server listening at http://%s:%s", host, port)
    });