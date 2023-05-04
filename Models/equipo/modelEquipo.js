const mongoose = require('mongoose');
let equipoSchema = mongoose.Schema;

let nuevoEquipo = new equipoSchema({
    nombre: {type: String},
    ciudad: {type: String},
    pais: {type: String},
    cantidadPlantilla: {type: Number},
    nombreLiga: {type: String},
    ligasGanadas: {type: Number},
});

module.exports = mongoose.model('equipo', nuevoEquipo);