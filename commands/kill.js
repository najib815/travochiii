const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    let author = (message.author.username);
    let mention = (message.mentions.members.first().user.username);
    const { bdy } = await get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${author}`);
    
    
    if (!args[0]) {
        const dembed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`**${author}** is about to Suicide.`)
        .setImage(bdy.message)
        .setTimestamp();
        message.channel.send(dembed)
        return;    
    }
    
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${mention}`);
      const hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`**${message.mentions.members.first().user.username}** is about to Suicide.`)
          .setImage(body.message)
          .setTimestamp()
      message.channel.send({
          embed: hembed
      })
      return;
  }
        const dbembed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`**${author}** is about to Suicide.`)
        .setImage(bdy.message)
        .setTimestamp();
        message.channel.send(dembed)
  message.channel.send(dbembed)
}
