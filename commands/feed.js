const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feed`);
    if (!args[0]) {
            message.channel.send("```Mention who you want to feed  !!```")
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} is feeding ${message.mentions.members.first().user.username} Report please !!! `)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Feed Is GOOD 👌");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send("```The F*ck You Can't Feed Yourself Here ...!!```")
} 



module.exports.help = {
    name: "feed"
}
