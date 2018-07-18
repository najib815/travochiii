const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = (bot, message) => {

randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        message.channel.send(embed);
    })
}
