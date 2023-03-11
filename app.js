require("dotenv").config({ path: 'variables.env' });//Use environment variables
require('colors');
const express = require("express"); //Express declarator that helps to set up a web service
const cors = require("cors");
const app = express();

app.use(cors());//We tell the app that is being created to use cors, avoid crossing the error between browsers
app.use(express.json());//I tell the app to be ready because it will receive a json

const dataBaseConnection = require('./config/mongoConnection');//Import dataBaseConnection function

const {inquirerMenu} = require('./utils/menu');

const port = process.env.PORT || 3001;

const prompt=require("prompt-sync")({sigint:true}); 

//Data base connection
dataBaseConnection();

/**
 * Here we invoke the routes!
 */
app.use("/api",require("./views"));//TODO localhost/api/_______

app.listen(port, () => {
    console.log("\n");
    console.log(`Tu app está lista por http://localhost:${port}`);
});


//Application menu
inquirerMenu();

