const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feed`);
    if (!args[0]) {
            message.channel.send("```Mention who you want to feed !!```")
            return;
        }
        if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
            const hembed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`${message.author.username} is Feeding ${message.mentions.members.first().user.username} Report him Please !!! `)
                .setImage(body.url)
                .setTimestamp()
            message.channel.send({
                embed: hembed
            })
            return;
        }
        message.channel.send("```The F*ck You Can't feed yourself here... !!```")
    } 

