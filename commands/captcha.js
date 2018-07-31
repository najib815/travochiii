const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
   let user = message.mentions.users.first() || message.author;
   let avatar = user.displayAvatarURL;
   let change = args.slice(1).join(" ");
   if (!change) return message.channel.send("No text provided");


    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=captcha&url=${avatar}&username=${change}`);
    
    let cembed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle(`Select All Images With **${change}**`)
       .setImage(body.message)
       .setTimestamp();
       message.delete().catch(O_o=>{});
       message.channel.send(cembed);
}
