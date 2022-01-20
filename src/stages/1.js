const catalogo = require("../catalogo");
const banco = require("../banco");

function execute(user,msg){

    if (msg === "*"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#"){
        banco.db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!catalogo.catalogo[msg]){
        return ["Código inválido, digite o código novamente","```Digite # para finalizar ou * para cancelar```",];
    }

    banco.db[user].itens.push(catalogo.catalogo[msg]);
    return [`Item(${catalogo.catalogo[msg].descricao}) adicionado com sucesso`,"```Digite # para finalizar ou * para cancelar```",];
}

exports.execute = execute;