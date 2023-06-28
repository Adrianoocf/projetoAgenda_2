const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
 
// rota da home
route.get('/', homeController.index); 

// rotas de login
route.get('/login/index', loginController.index); 
route.post('/login/register', loginController.register); 
route.post('/login/login', loginController.login); 
route.post('/login/logout', loginController.logout); 

module.exports = route;