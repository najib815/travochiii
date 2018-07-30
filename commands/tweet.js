const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
   let text = args.join(" ");
   if (!text) return message.channel.send("No text provided");


    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`);
    
    let cembed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle(`❗ Donald J. Trump Just Tweeted.`)
       .setImage(body.message)
       .setTimestamp();
       message.delete().catch(O_o=>{});
       message.channel.send(cembed);
}
