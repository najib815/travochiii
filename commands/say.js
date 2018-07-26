const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let specifyembed = new Discord.MessageEmbed()
        .setColor(0xF55D5D)
        .setDescription(`${message.author}, Please specify a word or message to embed.`)
        .setTimestamp();

    if (!args[0]) return message.channel.send(specifyembed);

    let embedsay = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${args[0]}`);

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
