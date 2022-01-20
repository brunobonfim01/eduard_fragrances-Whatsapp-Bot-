var stages = {
    0:{
        descrição:"Boasa Vindas",
        obj: require("./stages/0"),
    },
    1:{
        descrição:"Vendas",
        obj: require("./stages/1"),
    },
    2:{
        descrição:"Resumo",
        obj: require("./stages/2"),
    },
    3:{
        descrição:"Endereço",
        obj: require("./stages/3"),
    },
    4:{
        descrição:"Encerramento",
        obj: require("./stages/4"),
    },
};

exports.step = stages;