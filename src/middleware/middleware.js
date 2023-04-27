module.exports = (req, res, next) => {
    console.log('Entrou no middleware.');
    next();
};