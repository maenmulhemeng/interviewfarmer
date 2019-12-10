/*
User data model i.e class User

Author Maen Mulhem 
*/
const model = function(id,name,files){
    var u = {};
    u.id = id;
    u.name = name;
    u.files = files;
    return u;
};

// Make it public
module.exports = model;
