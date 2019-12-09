const model = function(id,name,files){
    var u = {};
    u.id = id;
    u.name = name;
    u.files = files;
    return u;
};

module.exports = model;
