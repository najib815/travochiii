const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
let cookie = [
    "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/DANCING_COOKIE.gif",
    "https://media.giphy.com/media/sBs1ITniVp7tm/giphy.gif",
    "https://i.gifer.com/21aK.gif",
    "https://steamusercontent-a.akamaihd.net/ugc/764896935328934464/D7ABB5A6C58BC7A3E20548EC389583BBAC8B0795/",
    "https://orig00.deviantart.net/3742/f/2017/175/2/0/tumblr_orplg1cwxr1u1wqbzo1_540_by_ari_6-dbdxpp7.gif",
    "https://pa1.narvii.com/6451/ab46c5ffc6341ab41b8cee643b82fa0082cd3dc6_hq.gif",
    "https://media0.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif",
    
    
  ]
  let author = (message.author);
  let hugresult = Math.floor((Math.random() * cookie.length));
  if (!args[0]) {
      message.channel.send("```You have to mention someone first !```")
      return;
  }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
      const hembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a Sweet COOKIE :cookie: !!! `)
          .setImage(cookie[hugresult])
          .setTimestamp()
      message.channel.send({
          embed: hembed
      })
      return;
  }
  message.channel.send(`$author is fucked up`)
}