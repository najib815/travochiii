const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/pat`);
    if (!args[0]) {
            message.channel.send("```Mention Who You Want To pat !!!```")
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** **Patted** **${message.mentions.members.first().user.username}** (°ᴥ°)`)
    .setImage(body.url)
    .setColor("RANDOM");
    

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send("```Mention who you want to pat \n*pat <user>```")
} 



module.exports.help = {
    name: "pat"
}
