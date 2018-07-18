const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = (client, message, args) => {

randomPuppy('memes')
    .then(url => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    });
    }
