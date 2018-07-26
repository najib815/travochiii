const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xF55D5D)
        .setDescription(`${message.author}, Please specify a word or message to embed.`)
        .setTimestamp();

    if (!args[0]) return message.channel.send(specifyembed);

    let embedsay = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${args.join(" ")}`);
    
    message.delete().catch(O_o=>{});
    message.channel.send(embedsay);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "embed",
    category: "Miscelaneous",
    description: "Embed a message you want.",
    usage: "embed"
};
