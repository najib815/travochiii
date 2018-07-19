const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/kiss`);
    if (!args[0]) {
            message.channel.send(`${message.author.username} kissed themself...! (weirdo)`)
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** **Kissed** **${message.mentions.members.first().user.username}** 😍😍😍 !`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Never let a fool kiss you, or a kiss fool you.");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send(`${message.author.username} kissed themself...! (weirdo)`)
} 



module.exports.help = {
    name: "kiss"
}
