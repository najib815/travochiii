const Discord = require("discord.js");
const { get } = require("snekfetch");
 
 module.exports.run = async(bot, message, args) => {
    const { body } = await get("https://rra.ram.moe/i/r?type=rem");
    let embed = new Discord.RichEmbed() 
        .setTitle("Sexiest Rem pictures UwU")
        .setImage(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`) 
        .setColor("#5E7CC1") 
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()

    await message.channel.send(embed)
   
  }
 module.exports.help = {
    name: "rem"
}
