const Discord = require('discord.js');


exports.run = async(bot, message, args) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`**${bot.user.username}** Commands !`)
          .setColor('#00BFFF')
          .addField("Field For Group name1", `test 123`, true)
          .addField("Field For `hui` Group name2", `test 123`, true)
          .addField("Field For Group name3", `test 123`, true)    
          .setFooter(`[${bot.user.username}] Created and Developed by Sally & Travochii.`);
            message.channel.send(helpembed)
            return;
}

    if (args[0] === "test") {
    
    message.channel.send("test 1");
    }
}
