const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift(); //We tell it to separate where the point (.) it is and choose the first, so we have the file name without the extension
}

const a = fs.readdirSync(PATH_ROUTES);//we tell it to read PATH_ROUTES directory asynchronously
a.filter((file) => {
    const name = removeExtension(file);//TODO index, registerView, registerPatienView
    if(name !== 'index'){
        //console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`)); //TODO http://localhost:3000/api/${name}
    }
}) 

module.exports = router