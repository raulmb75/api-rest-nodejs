const express = require('express');
const modelFutbolista = require('../Models/futbolista/modelFutbolista');
const app = express();

app.get('/todos/futbolistas',async(req, res)=>{
    let futbolista = await modelFutbolista.find({});
    res.send(futbolista).status(200);
});

app.get('/futbolista/:id',(req,res) => {
    let {id} = req.params;
    modelFutbolista
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    
    });

app.put('/futbolista/:id',(req, res)=>{
    let {id} = req.params;
    let {nombre, apellidoPaterno, apellidoMaterno, nacionalidad, posicion, edad, altura, equipo, peso, clubProcedencia, perfilPateo} = req.body;
    modelFutbolista
    .updateOne({_id: id},{ $set: {nombre, apellidoPaterno, apellidoMaterno, nacionalidad, posicion, edad, altura, equipo, peso, clubProcedencia, perfilPateo}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    
    });

    app.delete('/futbolista/:id',(req, res)=>{
        let {id} = req.params;
        modelFutbolista
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
        
        });

module.exports = app;