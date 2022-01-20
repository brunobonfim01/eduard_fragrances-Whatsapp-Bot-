const banco = require("../banco");

function execute(user,msg){
    banco.db[user].stage = 0;
    return ["Agradecemos à preferência.", "Aguarde, seu pedido chegará em breve", "Para mais informações ligue para (019) 9XXXX-XXXX",];
}

exports.execute = execute;