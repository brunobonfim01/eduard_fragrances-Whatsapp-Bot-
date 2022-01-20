const sulla = require("sulla");
const banco = require("./banco");
const stages = require("./stages");

sulla.create().then((client) => start(client));
function start(client){
    client.onMessage((message) => {
        let resp = stages.step[getStage(message.from)].obj.execute(message.from,message.body);
        for (let index = 0 ; index < Array(resp).length; index++){
            const element = Array(resp)[index];
            client.sendText(message.from,element)
        }
    });
}

function getStage(user){
    return banco.db[user].stage;
}