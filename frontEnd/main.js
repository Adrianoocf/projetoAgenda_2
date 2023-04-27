/*
  para instalar dependencies no package json 
  ... npm i --save-dev  @babel/core @babel/preset-env babel-loader webpack webpack-cli core-js css-loader regenerator-runtime style-loader
  npm i --save-dev webpack-cli webpack nodemon babel-loader @babel/preset-env @babel/core @babel/cli core-js regenerator-runtime  style-loader
*/

/*
  url e senha do mongo
  mongodb+srv://Adrianoocf:<password>@cluster0.oii3ojp.mongodb.net/?retryWrites=true&w=majority
*/

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

/* exemplos
import { nome as nome_cliente, sobrenome, idade, soma, Pessoa } from './modulo1';
const nome = 'Adriano';
console.log(nome);
console.log(`ola : ${nome_cliente} ${sobrenome} , tua idade é : ${idade}`);
console.log('10+5 : ' + soma(10,5));
const p1 = new Pessoa('Adriano','Ferreira')
console.log(p1)
*/

/*
 {
  "name": "webpack_professor",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack -w",
    "start": "nodemon server.js --ignore public --ignore frontend"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "babel-loader": "^9.1.2",
    "nodemon": "^2.0.22",
    "webpack": "^5.80.0",
    "webpack-cli": "^5.0.2"
  },
  "dependencies": {
    "regenerator-runtime": "^0.13.11",
    "style-loader": "^3.3.2",
    "core-js": "^3.30.1",
    "css-loader": "^6.7.3",
    "ejs": "^3.1.9",
    "express": "^4.18.2"
  }
}
*/