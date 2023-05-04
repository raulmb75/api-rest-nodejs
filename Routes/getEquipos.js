const express = require('express');
const modelEquipo = require('../Models/equipo/modelEquipo')
const equipoSchema = require('../Models/equipo/modelEquipo')
const app = express();


//Metodo get para obtener Todos
app.get('/todos/equipos',async(req, res)=>{
    let equipos = await modelEquipo.find({});
    res.send(equipos).status(200);
});

//obtener por id
app.get('/equipos/:id',(req,res) => {
    let {id} = req.params;
    equipoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    
    });

//Actualizar Datos
app.put('/equipos/:id',(req, res)=>{
    let {id} = req.params;
    let {nombre, ciudad, pais, cantidadPlantilla, nombreLiga, ligasGanadas} = req.body;
    equipoSchema
    .updateOne({_id: id},{ $set: {nombre, ciudad, pais, cantidadPlantilla, nombreLiga, ligasGanadas}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    
    });

    
    //Borrar datos
    app.delete('/equipos/:id',(req, res)=>{
        let {id} = req.params;
        equipoSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
        
        });

module.exports = app;