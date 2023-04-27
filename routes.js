const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
 
// rota da home
route.get('/', homeController.paginaInicial); 
route.post('/', homeController.trataPost); 

// route.get('/teste/:idUsuarios?/:parametro?', homeController.parametro); 
// rota de contato
route.get('/contato', contatoController.contato); 
 
module.exports = route;