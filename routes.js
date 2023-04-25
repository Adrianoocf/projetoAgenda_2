const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
 
route.get('/', homeController.paginaInicial); 
route.post('/', homeController.trataPost); 
route.get('/teste/:idUsuarios?/:parametro?', homeController.parametro); 
route.get('/contato', contatoController.contato); 
 
module.exports = route;