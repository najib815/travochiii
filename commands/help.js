const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle("**${bot.user.username}** Commands !")
          .setDescription("**The Help Command is WIP.** For more information please contact @🍭「Satō」#9098 ");
            message.channel.send(helpembed)
            return;
}

    if (args[0] === "test") {
    
    message.channel.send("test 1");
    }
}
