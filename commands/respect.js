const Discord = require('discord.js');


module.exports.run = async(bot, message, args) => {
   let text = args.join(" ");
    let embed = new Discord.RichEmbed()
          .setTitle(`**${message.author.username}** has paid their respects.`)
          .setColor('RANDOM')
          .setFooter(`Press F to pay your respects.`);
   if (!text) return message.channel.send(embed).then(m => m.react("🇫"));
    
            let hembed = new Discord.RichEmbed()
                .setTitle(`\u2000`)
                .setColor('RANDOM')
                .addField(`**${message.author}** has paid their respects to **${text}**`)
                .setFooter(`Press F to pay your respects.`);
               message.channel.send(hembed).then(m => m.react("🇫"));
}
