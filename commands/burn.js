const Discord = require('discord.js');

exports.run = async(bot, message) => {
    if (!message.mentions.users.first()) return message.channel.send('Mention someone.');
    let embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** *burned* **${message.mentions.members.first().user.username}**\nYou need some ice for that bud? :snowflake:`)
    .setImage(`https://cdn.discordapp.com/attachments/186920285285384192/262348996784291840/image.gif`)
    .setColor(`RANDOM`)
    message.channel.send({embed});
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: false,
    category: "Fun",
    help: "Burn a user.",
    args: "",
}
