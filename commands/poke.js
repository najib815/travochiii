const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/poke`);
    if (!args[0]) {
            message.channel.send("Mention someone \n``Usage : ;!poke <user>``")
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** pokes **${message.mentions.members.first().user.username}** !`)
    .setImage(`${body.url}`)
    .setColor("RANDOM")
    //.setFooter("Never let a fool kiss you, or a kiss fool you.");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send("Mention someone else \n``Usage : ;!poke <user not you>``")
} 



module.exports.help = {
    name: "kiss"
}
