const express = require('express');
const modelFutbolista = require('../../Models/futbolista/modelFutbolista');


let app = express();

app.post('/futbolista/nuevo', (req, res)=>{
    let body = req.body;
    console.log(body);

    let newSchemaFutbolista = new modelFutbolista({
        nombre: body.nombre,
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno, 
        nacionalidad: body.nacionalidad, 
        posicion: body.posicion,
        edad: body.edad,
        altura: body.altura, 
        equipo: body.equipo,
        peso: body.peso,
        clubProcedencia: body.clubProcedencia ,
        perfilPateo: body.perfilPateo,
    });

    newSchemaFutbolista
        .save()
        .then(
            (data)=>{
                return res.status(200)
                .json({
                    ok: true,
                    message: 'Datos guardados',
                    data
                });
            })
        .catch(
            (err) =>{
                console.log(err)
                return res.status(500)
                .json({
                    ok : false,
                    message: 'Ocurrio un error',
                    err
                });
            }
        )


});

module.exports = app;