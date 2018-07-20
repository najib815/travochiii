const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cuddle`);
    if (!args[0]) {
            message.channel.send("```Mention Who You Want To Hug  First !!!```")
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** **Hugged** **${message.mentions.members.first().user.username}** (°ᴥ°)`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("What a warm hug..");

    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send(`${message.author.username} need a hug ! hug him please... 😿😿😿`)
} 



module.exports.help = {
    name: "hug"
}
