const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.resply("🔞", "Cannot display NSFW content in a SFW channel.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Here is Some...NYAAAA UwU")
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag} | Powered by Nekos.life`);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "hentai"
}
