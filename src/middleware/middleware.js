exports.middlewareGlobal = (req, res, next) => {
    console.log('Entrou no middleware.');
    res.locals.umaVariavelLocal = 'Este e o valor da variavel local.'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        console.log('Erro');
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    console.log('Csrf');
    res.locals.csrfToken = req.csrfToken();
    next();
}

