exports.middlewareGlobal = (req, res, next) => {
    console.log('Entrou no middleware.');
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        console.log('Erro');
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    console.log('Csrf');
    res.locals.csrfToken = req.csrfToken();
    next();
}


exports.loginRequired = (req, res, next) => {
    console.log('login efetuado');
    if(!req.session.user){
        req.flash('errors','Você não está logado.')
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
}

