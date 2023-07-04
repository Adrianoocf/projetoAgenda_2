// git do curso https://github.com/luizomf/curso-js
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const urlConnection = process.env.CONNECTIONSTRING
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}

mongoose
    .connect(urlConnection, config)
    .then(() => app.emit('pronto'))
    .catch(error => console.error('Ocorreu um erro.'))

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware'); 
console.log('passou')
app.use(helmet());
app.use(helmet.referrerPolicy({policy: ["origin", "unsafe-url"]}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname,'public')))

const sessionOptions = session({
    secret: 'kfçlsmfsmfl',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
    httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src' , 'views'));
app.set('view engine', 'ejs');
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
 
app.on('pronto', () => {
    app.listen(4200,() => {
        console.log('Acessar http://localhost:4200');
        console.log('Servidor executando na porta 4200');
    });
});
 
// testando commit 04/07/2023
 