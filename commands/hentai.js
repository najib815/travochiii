const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


exports.run = (bot, message, args) => {
   if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

         request.get("https://nekobot.xyz/api/image?type=hentai").then(r => {
                fs.writeFile(`hentai.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./hentai.jpg`)
})
        
}
