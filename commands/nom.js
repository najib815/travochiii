const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://rra.ram.moe/i/r?type=nom`);
        if (!args[0]) {
            message.channel.send("```Mention who you want to nom nom UwU !!```")
            return;
        }
        if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
            const hembed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`${message.author.username} Noms ${message.mentions.members.first().user.username} ...Meeehh UwU !!! `)
                .setImage(`https://rra.ram.moe${body.path}`)
                .setTimestamp()
            message.channel.send({
                embed: hembed
            })
            return;
        }
message.channel.send("```You Can't Nom Yourself ...UwU !!```")
} 



module.exports.help = {
    name: "kiss"
}
