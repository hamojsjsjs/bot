let Telegram = require("node-telegram-bot-api"),
    admin = require('./admin'),
    writeFile = require('./writeFile'),
    token = "5414674156:AAEo53qoywuG1L_ey-Rx45IF63Lbpzdn8vE",
    opt = {polling : true},
    bot = new Telegram(token, opt);
    
bot.on('message', (msg)=>{
    let id = msg.from.id,
        ids = writeFile.read('users'),
        messages = writeFile.read('messages'),
        reply = msg.reply_to_message;
    admin(bot, msg, reply, id , ids)
    if (ids.indexOf(msg.chat.id) === -1) {
        writeFile.write('users', msg.chat.id)
    }
    
    if (msg.text in messages) {
       bot.sendMessage(msg.chat.id, messages[msg.text])
    }



    // if (msg.text == 'tell' && reply) {
    //     console.log(reply);
    //     console.log(msg);
    //     bot.sendMessage(msg.chat.id, `jhjhj @${reply.from.username || reply.from.first_name} wf ${msg.from.username ? '@'+ msg.from.username : msg.from.first_name} wdsokfos ${msg.text}`)
    // }

    // console.log(msg);
})
