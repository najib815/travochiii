const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


exports.run = (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    const subreddits = [
        'AnimeHentaiGifs',
        'hentai_gifs_animated',
        'FauxHentai',
        'hentai-gifs'
    ]
    const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
       
   
            })
        
}
