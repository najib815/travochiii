const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/spank`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
    if (!args[0]) {
            message.channel.send(`R U SERIOUS -.- !! \n >Usage: ;!spank <user>`)
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username} Spanks ${message.mentions.members.first().user.username}'s Ass O.O !`)
    .setImage(body.url)
    .setColor("RANDOM")

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send(`R U SERIOUS -.- !! \n >Usage: ;!spank <user>`)
} 



module.exports.help = {
    name: "spank"
}
