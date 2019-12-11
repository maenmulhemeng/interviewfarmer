/*
This router is responsible of handling the requests that related to Users
Plus the router talks to user controllers and routes the specified reqest to the specific handler

Author: Maen Mulhem
 */

const framework = require('express');
const router = framework.Router();
const multer  = require('multer');
const controller = require('../controllers/usersController');

// private methods and variables
const uploaderPath = '/../../public/images';
const notSupported = (req,res)=>(res.end('Not supported'));

// First, let's configure the Multer 
// to parse the multipart/form-data   
// which means allowing the server to handle
// the upload files requests
// for more information you can check https://www.npmjs.com/package/multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {   
      cb(null, __dirname+uploaderPath)
    },
    filename: function (req, file, cb) {        
      cb(null,Date.now() + file.originalname )
    }
  })    
  router.use(multer({ storage: storage }).single('attachment')); 




//Now let's configure the router

// users
router.route('/').get(controller.getUsers)    
    .post(notSupported)
    .put(notSupported)
    .delete(notSupported);

// users/:id/files
router.route('/:id/files').get(controller.getUserFiles)
            .post(controller.upload)
            .put(notSupported)
            .delete(notSupported);

// users/:id/files/:fileId
router.route('/:id/files/:fileId').get(controller.download)
        .post(notSupported)
        .put(notSupported)
        .delete(notSupported);

// finally let's make it public 
module.exports = router;

