const mongoose = require('mongoose');
let futbolistaSchema = mongoose.Schema;

let nuevoFutbolista = new futbolistaSchema({
    nombre: {type: String},
    apellidoPaterno: {type: String},
    apellidoMaterno: {type: String},
    nacionalidad: {type: String},
    posicion: {type: String},
    edad: {type: Number},
    altura: {type: Number},
    equipo: {type: String},
    peso: {type: Number},
    clubProcedencia: {type: String},
    perfilPateo: {type: String},
});

module.exports = mongoose.model('futbolista', nuevoFutbolista);
