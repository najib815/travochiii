const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekobot.xyz/api/image?type=anal`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Real Anal Gifs")
    .setImage(body.message)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag} | CalmBot`);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "boobs"
}
