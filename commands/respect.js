const Discord = require('discord.js');


module.exports.run = async(bot, message, args) => {
   let text = args.join(" ");
   if (!text) return message.channel.send("No text provided");
    
            let hembed = new Discord.RichEmbed()
                .setTitle(`\u2000`)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${text}`)
                .setFooter(`Press F to pay your respects.`);
               message.channel.send(hembed).then(m => m.react("🇫"));
}
