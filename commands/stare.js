const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://rra.ram.moe/i/r?type=stare`);
    if (!args[0]) {
            message.channel.send(`**${message.author.username}** stares at... themselves..?`)
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** stares at **${message.mentions.members.first().user.username}** 🤩!`)
    .setImage(`https://rra.ram.moe${body.path}`)
    .setColor("RANDOM")
    //.setFooter("Never let a fool kiss you, or a kiss fool you.");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send(`**${message.author.username}** stares at... themselves..?`)
} 



module.exports.help = {
    name: "kiss"
}
