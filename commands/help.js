const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`**${bot.user.username}** Commands !`)
          .setColor('RANDOM')
          .setDescription("**The Help Command is WIP.** \nFor more information please contact **🍭「Satō」#9098** or **🍯「Hachimitsu」#4965** ");
            message.channel.send(helpembed)
            return;
}

    if (args[0] === "test") {
    
    message.channel.send("test 1");
    }
}
