const menu = require("../menu");
const banco = require("../banco");

function execute(user,msg){
    return ["Olá sou a Channel , assistente virtual da Eduard Fragrances, e irei apresentar-te nosso catálogo, para fazer o pedido , basta enviar o código do produto",catalogo];

    let catalogo = "CATÁLOGO \n\n";
    Object.keys(catalogo.catalogo).forEach((value) => {
        let element = catalogo.catalogo[value];
        catalogo += `${value} - ${element.descricao}  R$ ${element.preco} \n`;
    });

    banco.db[user].stage = 1;

}

exports.execute = execute;