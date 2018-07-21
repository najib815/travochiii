const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);
    if (!args[0]) {
            message.channel.send(`Mention who you want to slap...!`)
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** **Slaps** **${message.mentions.members.first().user.username}** OwO !`)
    .setImage(body.url)
    .setColor("RANDOM");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send(`Mention who you want to slap...!`)
} 



module.exports.help = {
    name: "Slap"
}
