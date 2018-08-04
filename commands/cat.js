const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);
    
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Meoww", "http://www.nyan.cat/cats/original.gif")
    .setImage(body.file)
    .setColor("RANDOM")
    //.setFooter("Never let a fool kiss you, or a kiss fool you.");

    message.channel.send(hentaiEmbed);
    
} 



module.exports.help = {
    name: "kiss"
}
