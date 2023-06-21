exports.paginaInicial = (req, res) => {
    res.render('index', {
      titulo: 'Este será o título da página',
      numeros: [0, 1, 2, 3, 4]
    });
    return;
  };
  
  exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
  };

/*
exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'Luiz', logado:true};
    // console.log(req.session.usuario);
    console.log('carregou index')
    res.render('index', {
        titulo: 'Este será o título da pagina',
        numeros: [0,1,2,3,4]
    });
    return;
};

exports.trataPost = (req,res) => {
    res.send(`Ei ${req.body.nome} , sou sua nova rota de post.., no outro campo
        voce digitou : ${req.body.outroCampo}`);
    return;
}

exports.parametro = ('/teste/:idUsuarios?/:parametro?' , (req, res) => {
    console.log(req.params);
    // http://localhost:3000/teste?numer1=123&number2=456 -> exemplo de url com paramentros
    console.log(req.query);
    res.send(req.query);
});
*/