 'use strict'

    const mongoose = require('mongoose');
    const app = require('../Server/index');
    const port = 3900;

    //Generar promesas
    mongoose.Promise = global.Promise;

    //hacer conexion a la base de datos
    mongoose.connect('mongodb://localhost:27017/futbol',{useNewUrlParser: true})
    .then(()=>{
        console.log("base de datos corriendo en local, pa");

        //Escuchar el servidor
        app.listen(port, ()=>{
            console.log(`Server corriendo en el puerto: ${port}`);
        })
    });