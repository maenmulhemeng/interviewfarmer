/*
  We build here an Access Layer from Skratch just to show that we can 
  this pattern if , for some reason, we do't want to use ORM. 
  Here, the access layer connects the DB and it uses the Data Model class 
  to map the result of the queries into more understandable objects

  Author: Maen Mulhem
*/

const mysql = require('mysql');
const fileModel = require('./fileModel');
const userModel = require('./userModel');
const constants = require('../../Shared/constants');

const DB = {};      

// Define connection
DB.connect = ()=>{
    return con = mysql.createConnection({
        host: constants.MySQLHost,
        user: constants.MySQLUser,
        port: constants.MySQLPort,
        password: constants.MySQLPassword,
        database:constants.MySQLDatabase
      });
}

DB.selectUsers= (cb)=>{
    const con = DB.connect();
    con.connect(function(err) {
        if (err) throw err;
        
        console.log("Connected!");
        con.query("select * from users", function (err, result) {
        if (err) throw err;                        
            cb( result.map(r=>(userModel(r.id,r.name))));
        });
      });
}
DB.selectUserFiles= (userid,cb)=>{
    const con = DB.connect();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from files where userid = "+userid, function (err, result) {
        if (err) throw err;
            cb(result);
        });
      });
}

DB.insertFile= (userid,filesrc,cb)=>{
    const con = DB.connect();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query("insert into files(userId,src) values("+userid+",'"+filesrc+"')", function (err, filleRow) {
        if (err) throw err;
            
            con.commit(function(err) {
                if (err) { 
                  con.rollback(function() {
                    throw err;
                  });
                }
                console.log('Transaction Complete.');
                //console.log("select * from files where id ="+filleRow.insertId);
                con.query("select * from files where id ="+filleRow.insertId, function (err, result) {
                    console.log(result);
                    const files = result.map(f=>(fileModel(f.id,f.userId,f.src)));
                    
                    cb(files[0]);
                    con.end();
                });
                
              });            
        });
      });
}
module.exports = DB;