const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feed`);
    if (!args[0]) {
            message.channel.send("```Mention who you want to nom nom UwU !!```")
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Here is Some...NYAAAA UwU")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("By Trav Bot");

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "feed"
}
