const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://rra.ram.moe/i/r?type=cry`);
    
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** has started crying 😢😭😭!`)
    .setImage(`https://rra.ram.moe${body.path}`)
    .setColor("RANDOM")
    //.setFooter("Never let a fool kiss you, or a kiss fool you.");

    message.channel.send(hentaiEmbed);
    
} 



module.exports.help = {
    name: "kiss"
}
