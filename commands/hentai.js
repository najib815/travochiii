const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


exports.run = (bot, message, args) => {
   if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        randomPuppy('HENTAI_GIF')
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setDescription('[Here is some...NYYAAAAA UwU](${url})')  
                    .setImage(url)
                    .setColor(0xffa500);
                return message.channel.send({ embed });
})
        
}
