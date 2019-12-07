const framework = require('express');
const router = framework.Router();
const db = require('../models/users');
const multer  = require('multer');
const uploaderPath = '/../../public/images';


// To parse the multipart/form-data   
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
   
      cb(null, __dirname+uploaderPath)
    },
    filename: function (req, file, cb) {
        
      cb(null, file.originalname)
    }
  })
  
  //var upload = multer({ storage: storage })
     
  router.use(multer({ storage: storage }).single('attachment')); 

//let's configure the router

//let's route
// users
router.get('/',(req,res)=>{
    console.log('Get users');
    //res.json(db);
    db.selectUsers((users)=>{
        console.log(users);
        res.json(users)
    });        
});
router.post('/',(req,res)=>{
    console.log('Post users');    
    res.end('Post users is not supported now');
});
router.put('/',(req,res)=>{
    console.log('Put users');
    res.end('Put users is not supported now');
});

router.delete('/',(req,res)=>{
    console.log('Delete users');
    res.end('Delete users is not supported now');
});

// users/:id/files
router.get('/:id/files',(req,res)=>{
    // let's return a list of the user's files
    console.log('Get users '+req.params.id);
    //const user = db.find(u=>u.id == req.params.id);
    db.selectUserFiles(req.params.id,(files)=>{        
        //res.json(user.files);
        res.json(files);
    });    
});
router.post('/:id/files',(req,res)=>{
    // let's upload the file
    console.log('Upload a file '+req.file+' by '+req.params.id);
    
    //const user = db.find(u=>u.id == req.params.id);
    //if(!user){
    //    res.json({err:"User not found"});
    //}

    //user.files.push({src:req.file.originalname});
    db.insertFile(req.params.id,req.file.originalname,(r)=>{
        res.json(req.file.originalname);
    });
    
});
router.put('/:id/files',(req,res)=>{

});

router.delete('/:id/files',(req,res)=>{

});

// users/:id/files/:fileId
router.get('/:id/files/:fileId',(req,res)=>{    
    // let's download the file
    // but first let's check if the user own this file
    //const user = db.find(u=>u.id == req.params.id);
    //if(!user){
    //    res.json({err:"User not found"});
   // }
    //const f = user.files.find(file => file.src == req.params.fileId);
    //if (!f){
     //   res.json({err:"File not found"});
   // }
    db.selectUserFiles(req.params.id,(files)=>{
        res.download(__dirname+"/../../public/images/"+req.params.fileId);
    });
    
    
    
});
router.post('/:id/files/:fileId',(req,res)=>{

});
router.put('/:id/files/:fileId',(req,res)=>{

});

router.delete('/:id/files/:fileId',(req,res)=>{

});



module.exports = router;