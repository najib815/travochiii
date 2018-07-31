const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=kidnap&url=${user.displayAvatarURL}`);
   // let user = message.mentions.users.first().user.username || message.author.username;
   
    let hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${user.username}** has been Kidnapped.`)
          .setImage(body.message)
          .setTimestamp();
      message.channel.send(hembed)
}
