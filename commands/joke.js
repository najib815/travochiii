const { get } = require("snekfetch");
const Discord = require("discord.js");

  exports.run = async(bot, message, args) => {
    const joek = await get('https://icanhazdadjoke.com/')
		       .set('Accept', 'application/json')
	         message.channel.createMessage(joek.body.joke)
}
 
