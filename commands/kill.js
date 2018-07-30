const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kms&text=${user.displayAvatarURL}`);
   
      let hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${user}** is about to Suicide.`)
          .setImage(body.message)
          .setTimestamp()
      message.channel.send(hembed)
      return;
  }


