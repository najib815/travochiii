const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feet`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let feetEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Here is Some...NYAAAA UwU")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("By Trav Bot");

    message.channel.send(feetEmbed);

}

module.exports.help = {
    name: "feet"
}
