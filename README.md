# Interviewfarmer
This project is a part of a technical interview for FarmAtHand. It uses three main environemt **NodeJs** (express) as a web server, **MySQL** for database, and **React** for client side. 

## Prerequisites
 * You need to be sure that you installed [NodeJs and NPM](https://nodejs.org/en/download/) of course whenver you install NodeJs you install NPM with it. 
 * Make sure you installed NodeJS `node -v` and `npm --version`
 * Install the dependencies for both the server and the client 
  1. Go to the *main folder* and type `npm install server --save`
  2. Go to the folder `reaction` and type `npm install server --save`

## Initializing the DB
 1. Launch MySQL Database server 
 2. create a database and give it a name 'interview'
 3. execut the script in the interview.sql to insert some data 
 
## Initialize the node server
 Open the file `Shared/constants.js`
 
  ### Express configuration
   ``` 
    module.exports.webServerPort = 8081;  // The port  
    module.exports.staticFolder = 'public'; //'reaction' for development time
   ```

  ### The database connection information
   ```
    module.exports.MySQLPort = 3306; // set right MySQL port
    module.exports.MySQLHost = "localhost"; // IP
    module.exports.MySQLUser = "root"; // Or the user that you might created 
    module.exports.MySQLPassword = ""; 
    module.exports.MySQLDatabase = "interview"; // Or the name that you might chose
   ```
## Run the project
1. Double check if the file `Shared/constants.js` has `module.exports.staticFolder = 'public';` 
2. Go to the *main folder*  and type `npm start`. This will run the NodeJs server `server.js` 
3. Open the browser and run `http://localhost:8081` 
4. The server will send the React single-page application and now you can use it. Done !!

## Development mode
If you want to put the application in the development mode please 
1. Go to the file `Shared/constants.js` and set `module.exports.staticFolder = 'reaction';` 
2. Go to the main folder and run `npm start`. this will run the **NodeJs server** `server.js` 
3. Go to the `reaction` folder and run `npm start`. this will run the **React** 
4. Go to the browser and `http://localhost:3000` 
5. **That's it**
## To build React and to deploy it
 1. Go to the folder `reaction` and type `npm run-script build`
 2. After building finishes, copy all of the files and folders in `build` folder
 3. Go to the `public` folder 
 > remove the old files except `images`, `img`
 4. Past the new ones 
 5. **Run the project**
 
