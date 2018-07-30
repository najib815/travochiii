const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
   let change = args.slice(1).join(' ');
   if (!change) return message.channel.send("No text provided");


    const { body } = await get("https://nekobot.xyz/api/imagegen?type=changemymind&text=${change}");
    
    let cembed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle(`Who Can Change **${message.author.username}**'s Mind ?`)
       .setImage(body.message)
       .setTimestamp();
       message.channel.send(cembed);
    }
