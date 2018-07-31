const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
   let user = message.mentions.users.first() || message.author;
   let avatar = user.displayAvatarURL;
   let change = args.join(" ");
   if (!change) return message.channel.send("No text provided");


    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${avatar}&text=${change}&username=${user.username}`);
    
    let cembed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle(`OwO What is This`)
       .setImage(body.message)
       .setTimestamp();
       message.delete().catch(O_o=>{});
       message.channel.send(cembed);
}
