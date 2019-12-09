const Sequelize = require('Sequelize');
const  mysql2 = require ('mysql2'); 
var sequelize = new Sequelize('interview', 'root', '', {
    host: 'localhost',
    port:3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    // SQLite only
    storage: 'path/to/database.sqlite'
  });

module.exports.users =  sequelize.define('users', {}); // timestamps is false by default
module.exports.files =  sequelize.define('files', {}); // timestamps is false by default


