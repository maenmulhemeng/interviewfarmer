
const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const app = express();
const staticFolder = '/public/';
const uploaderPath = '/public/images';
const port = 8081;


// Configure express frameowrk

   // To serve the static html 
   app.use(express.static(staticFolder));

   // To parse the application/x-www-form-urlencoded 
   // When the form encrypts application/x-www-form-urlencoded
   // both true and false allow the post handler to see the parameters of the files,other data inputs and query   
   var urlencodedParser = bodyParser.urlencoded({ extended: false })
   
   // To parse the multipart/form-data
   // When the form encrypts multipart/form-data to upload files
   // Take care of mapping single('title') with <input name="same_title" ..etc which allows you to use req.file not req.files (WARNING)
   // array('title') with <input name="same_title" and also
   // <input name="same_titel"   which allows you to use req.files 
   // Otherwise you get this error MulterError: Unexpected field
   var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, __dirname+uploaderPath)
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    })
    
    var upload = multer({ storage: storage })
       
   app.use(multer({storage:storage}).single('attachment')); 





// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   // Because we set the server to handle static web pages 
   // we can now use 
   res.sendFile( __dirname + staticFolder + "index.html" );
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {

   console.log("Got a POST request for the homepage");
   // Prepare output in JSON format
   response = {
      first_name:req.query.username      
   };
   console.log(response);
   res.end(JSON.stringify(response));   
})

app.put('/',function(req,res){
   console.log("Got a Put request for the homepage");
   res.send('Hello PUT');
});

app.delete('/user/:id',(req,res)=>{
   console.log("Got a Delete request for the user");
   res.send('Delete User');
})

// Handle a group of request by one using *
app.get('/Ma*n',(req,res)=>{
   console.log("Got a GET request for the Ma*n");
   res.send('GET '+req.query.username);
});

app.post('/Ma*n',urlencodedParser,(req,res)=>{
   console.log("Got a GET request for the Ma*n");
   // you can return text res.send('POST '+req.body.username);
   // you can return json res.end(JSON.stringify(response));   
   // you can return res.json({});  
   // you can return file res.sendFile( __dirname + staticFolder + "index.html" );
   console.log(req.body.userid);
   res.json(req.file);   

});




var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
/*
Things I have learnt here 
1- REST request using app.get('path',handler(req,res));
2- handle static web pages by setting the express framework and the express application 
   app.use(express.static(staticFolder));
3- set request titles using * such as Ma*n 
5- parameters in GET requests are in req.query.username
   parameters in POST request using BodyParser are in req.body.username
6- To allow parsing the Form body we take from the body parser configuration
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
 then we use it in the post handler  app.post('/Ma*n',urlencodedParser,(req,res)=>{

7- retuen json respons  res.end(JSON.stringify(response));  
*/
