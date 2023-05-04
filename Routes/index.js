const express = require('express');
const app = express();

//Mostrar prueba
app.use(require('../Routes/inicio'));
app.use(require('./futbolistaNuevo/routeFutbolistaNuevo'))
app.use(require('./equipoNuevo/routeEquipoNuevo'))
app.use(require('./getEquipos'))
app.use(require('./crudFutbolista'))



module.exports= app;
