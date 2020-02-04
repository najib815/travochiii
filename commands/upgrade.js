const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    let key = args[0];
    let country = args[1];
    .get(`https://spoty.gg/api/v1/?action=upgrade&key=${key}&country=${country}`);
    
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    //.setTitle("Real Anal Gifs")
    .addField(body.message)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag} | CalmBot`);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "boobs"
}
