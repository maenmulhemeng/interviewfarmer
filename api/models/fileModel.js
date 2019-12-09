const model = function (id,userid,src){
    var f = {};
    f.id = id;
    f.userid = userid;    
    f.src = src;
    return f;
};

module.exports = model;
