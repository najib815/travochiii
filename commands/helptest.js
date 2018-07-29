const Discord = require('discord.js');


exports.run = async(bot, message, args) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`**${bot.user.username}** Commands !`)
          .setColor('#00BFFF')
          .addField("Animals", "`;!help mod` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .addField("🎭Fun Commands🎲", "`;!help fun` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("🤫NSFW Commands🔥", "`;!help nsfw` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("😂Meme Commands👌", "`;!help memes` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)   
          .addField("😴Mod Commands💬", "`;!help mod` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("📷Image Edit🎨", "`;!help image` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("🆗Text Edit🈂", "`;!help text` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .addField("⚒Utility Commands⛏", "`;!help utility` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .setFooter(`[${bot.user.username}] Created and Developed by Sally & Travochii.`);
            message.channel.send(helpembed)
            return;
} if (args[0] === "fun") {
    let funembed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .addField("🎭Fun Commands🎲", "`hug`,`kiss`,`feed`,`fmk`,`cookie`,`nom`,`slap`,`gayrate`,`notice`")
          .setFooter(`Use ${bot.user.username}'s prefix before every Command \nWe will add more commands as soon as posible.`);
    message.channel.send(funembed);
    }
}
