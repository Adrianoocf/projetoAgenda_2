exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'Luiz', logado:true};
    // console.log(req.session.usuario);
    
    res.render('index', {
        titulo: 'Este sera o titulo da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
};

exports.trataPost = (req,res) => {
    res.send(`Ei ${req.body.nome} , sou sua nova rota de post.., no outro campo
        voce digitou : ${req.body.outroCampo}`)
}

exports.parametro = ('/teste/:idUsuarios?/:parametro?' , (req, res) => {
    console.log(req.params);
    // http://localhost:3000/teste?numer1=123&number2=456 -> exemplo de url com paramentros
    console.log(req.query);
    res.send(req.query);
});