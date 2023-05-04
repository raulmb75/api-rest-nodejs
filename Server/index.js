'use strict'
//Llamar las librerias
const bodyParser = require('body-parser');
const express = require('express');


//iniciamos express
const app = express();

//Activar cors 
app.use(function (req, res, next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

//middleware de express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('../Routes/index'));

module.exports = app;