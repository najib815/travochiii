const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let cookie = [
        "https://i.imgur.com/xAQw8pK.gif",
        "https://media1.tenor.com/images/ae6d71cdb35082ac7a77afe20aad28c4/tenor.gif",
        "http://static1.businessinsider.com/image/53ef827c69bedd404662f48e/more%20police.gif",
        "https://thumbs.gfycat.com/BrightIdealisticIcelandgull-max-1mb.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/826/832/3e4.gif",
        "https://media2.giphy.com/media/3o6wNPIj7WBQcJCReE/giphy-downsized.gif",
        "https://thumbs.gfycat.com/ImaginativeEarlyCaribou-size_restricted.gif",
        
    ]
      let hugresult = Math.floor((Math.random() * cookie.length));

    if (!message.channel.nsfw) return message.reply("🔞 Cannot display NSFW content in a SFW channel.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🚨 FBI Open Up !! 🚔")
    .setImage(cookie[hugresult])
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "hentai"
}