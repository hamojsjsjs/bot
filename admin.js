module.exports = (bot, msg, reply, id, ids) => {
    if (id == 1780306033 && msg.text == '/sendAllUsers' && reply.text){
        ids.forEach(e => {
            bot.sendMessage(e, reply.text)
        })
    }
}