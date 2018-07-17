const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


exports.run = (bot, message, args) => {
   if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

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
