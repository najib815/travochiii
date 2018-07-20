const Discord = require("discord.js");
const { get } = require("snekfetch");
 
 module.exports.run = async(bot, message, args) => {
    const { body } = await get("https://rra.ram.moe/i/r?type=potato");
    let embed = new Discord.RichEmbed() 
        .setTitle("I'm a Potatoooo")
        .setImage(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`) 
        .setColor("RANDOM") 
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()

    await message.channel.send(embed)
   
  }
 module.exports.help = {
    name: "potato"
}
