const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first().user.username || message.author.username;

    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kms&url=${user.displayAvatarURL}`);
   
      let hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${user}** is about to Suicide.`)
          .setImage(body.message)
          .setTimestamp()
      message.channel.send(hembed)
  }


