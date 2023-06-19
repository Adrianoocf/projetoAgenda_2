exports.middlewareGlobal = (req, res, next) => {
    console.log('Entrou no middleware.');
    res.locals.umaVariavelLocal = 'Este e o vlor da variavel local.'
    next();
};