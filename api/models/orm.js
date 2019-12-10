/*
  ORM is used to map the data models objects (classes) in the application with the data rows in the DB
  here I use Sequelize just to show that we can use a predefined ORM package
  there is nothing special about it now, we can use another package

  Author: Maen Mulhem
*/

const Sequelize = require('Sequelize');
const  mysql2 = require ('mysql2'); 
const constants = require('../../Shared/constants');


var sequelize = new Sequelize(constants.MySQLDatabase, constants.MySQLUser, constants.MySQLPassword, {
    host: constants.MySQLHost,
    port:constants.MySQLPort,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }  
  });

// Make the data models public 
module.exports.users =  sequelize.define('users', {}); // timestamps is false by default
module.exports.files =  sequelize.define('files', {}); // timestamps is false by default


