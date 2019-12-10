/*
This controller holds the handlers that related to the users and users files
the controler talks to the model layer or ORM object and it can be developed to talk to a business layer object

Author: Maen Mulhem
*/

const orm = require('../models/orm');
const db = require('../models/users');

module.exports.getUsers = (req,res)=>{
    console.log('Get users');

    orm.users.findAll( {attributes: ['id', 'name']}).then(function (users) {
        u = users.map(el => el.get({ plain: true }));
        console.log(u);
        res.json(u)
    });

    // Another solution
    //res.json(db);
   /* db.selectUsers((users)=>{
        console.log(users);
        res.json(users)
    });        */
}

module.exports.getUserFiles = (req,res)=>{
    // let's return a list of the user's files
    console.log('Get users '+req.params.id);  
    orm.files.findAll( 
        {attributes: ['id', 'src','userId'], 
            where: {
                userId:req.params.id                
        }}).then(function (files) {
            f = files.map(el => el.get({ plain: true }));
            console.log(f);
            res.json(f)
        });

    // Another solution
    //const user = db.find(u=>u.id == req.params.id);
    /*db.selectUserFiles(req.params.id,(files)=>{        
        //res.json(user.files);
        res.json(files);
    });*/
};

module.exports.upload = (req,res)=>{
    // let's upload the file
    
    // build a new name for the uploaded file
    const newName= req.file.filename;

    console.log('Post - Upload a file '+newName+' by '+req.params.id);

    // Save it in DB
    db.insertFile(req.params.id,newName,(r)=>{        
        console.log(r);
        res.json(r);
    });   
        
};

module.exports.download = (req,res)=>{    
    // let's download the file    
    db.selectUserFiles(req.params.id,(files)=>{
        const f = files.find(f => f.src === req.params.fileId);
        if (f !== undefined){
            res.download(__dirname+"/../../public/images/"+req.params.fileId);
        }
    });  
};
