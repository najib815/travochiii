const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Here is Some...NYYAAAA UwU")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag} | Powered by Nekos.life`);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "neko"
}
