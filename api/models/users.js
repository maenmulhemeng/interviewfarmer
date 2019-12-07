const mysql = require('mysql');



const DB = {};          
DB.connect = ()=>{
    return con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"interview"
      });
}

DB.selectUsers= (cb)=>{
    const con = DB.connect();
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from user", function (err, result) {
        if (err) throw err;
          
            cb( result.map(r=>({id:r.id,name:r.name})));
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
        
        con.query("insert into files(userId,src) values("+userid+",'"+filesrc+"')", function (err, result) {
        if (err) throw err;
            cb(result);
        });
      });
}
module.exports = DB;