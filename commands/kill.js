const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first() || message.isMentioned(message.author);
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kms&url=${user.displayAvatarURL}`);
    if (!args[0]) {
        const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kms&url=${user.displayAvatarURL}`);
        let aembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${message.author}** is about to Suicide.`)
          .setImage(body.message)
          .setTimestamp();
     message.channel.send(aembed)
        return;
    }
   
    let hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${message.mentions.users.first().user.username}** is about to Suicide.`)
          .setImage(body.message)
          .setTimestamp();
      message.channel.send(hembed)
  }


