const Discord = require('discord.js');


exports.run = async(bot, message, args) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`**${bot.user.username}** Commands !`)
          .setColor('#00BFFF')
          .addField("Fun Commands", "`fun` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("NSFW Commands", "`nsfw` \nComing Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("Meme Commands", "`memes` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)   
          .addField("Coming Soon", "`Coming Soon` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .setFooter(`[${bot.user.username}] Created and Developed by Sally & Travochii.`);
            message.channel.send(helpembed)
            return;
} if (args[0] === "test") {
    
    message.channel.send("test 1");
    }
}
