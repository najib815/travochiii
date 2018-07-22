const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feetg`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let feetEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Here is Some Real SOFT FEET.. UwU")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Licc them UwU`);

    message.channel.send(feetEmbed);

}

module.exports.help = {
    name: "feet"
}
