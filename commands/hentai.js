const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


exports.run = (bot, message, args) => {
   var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('HENTAI_GIF')
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setFooter(`hentai.gif`)
                    .setDescription(`[Image URL](${url})`)   
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
})
        
}
