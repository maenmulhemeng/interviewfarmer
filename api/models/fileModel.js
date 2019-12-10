/*
File data model i.e class File 

Author: Maen Mulhem
*/
const model = function (id,userid,src){
    var f = {};
    f.id = id;
    f.userid = userid;    
    f.src = src;
    return f;
};

// Make it public
module.exports = model;
