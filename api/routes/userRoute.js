const framework = require('express');
const router = framework.Router();
const db = require('../models/users');
const multer  = require('multer');
const uploaderPath = '/../../public/images';
const orm = require('../models/orm');


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
   /* db.selectUsers((users)=>{
        console.log(users);
        res.json(users)
    });        */
    orm.users.findAll( {attributes: ['id', 'name']}).then(function (users) {
        u = users.map(el => el.get({ plain: true }));
        console.log(u);
        res.json(u)
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
    /*db.selectUserFiles(req.params.id,(files)=>{        
        //res.json(user.files);
        res.json(files);
    });*/
    orm.files.findAll( 
        {attributes: ['id', 'src','userId'], 
            where: {
                userId:req.params.id                
        }}).then(function (files) {
            f = files.map(el => el.get({ plain: true }));
            console.log(f);
            res.json(f)
        });
});
router.post('/:id/files',(req,res)=>{
    // let's upload the file
    console.log('Post - Upload a file '+req.file.originalname+' by '+req.params.id);
    
    db.insertFile(req.params.id,req.file.originalname,(r)=>{
        console.log(r);
        res.json(r);
    });   
        
    
  /*  
    orm.files
  .create({src: req.file.originalname})
  .then((result)=>{
    console.log(result.get({plain: true}));
  })*/
});
router.put('/:id/files',(req,res)=>{
    console.log("PUT !");
    res.end("PUT is not supported now");
});

router.delete('/:id/files',(req,res)=>{
    console.log("Delete  !");
    res.end("Delete is not supported now");
});

// users/:id/files/:fileId
router.get('/:id/files/:fileId',(req,res)=>{    
    // let's download the file    
    db.selectUserFiles(req.params.id,(files)=>{
        res.download(__dirname+"/../../public/images/"+req.params.fileId);
    });
    
    
    
});
router.post('/:id/files/:fileId',(req,res)=>{
    console.log("Post  !");
    res.end("Post is not supported now");
});
router.put('/:id/files/:fileId',(req,res)=>{
    console.log("PUT !");
    res.end("PUT is not supported now");
});

router.delete('/:id/files/:fileId',(req,res)=>{
    console.log("Delete  !");
    res.end("Delete is not supported now");
});



module.exports = router;