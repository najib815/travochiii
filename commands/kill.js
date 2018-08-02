const { kill } = require('../commands/arrays.json')

module.exports.run = (bot, message, args) => {
	 const rand = Math.floor(Math.random() * 82);
         const poke = rand > 0 ? rand : Math.floor(Math.random() * 82);
         const pokem = kill[poke];
	
          if (!args[0]) {
            message.channel.send("no you can do it yourself. Please tag someone else to kill.")
            return;
       }
	if (!message.isMentioned(message.author)) {
		return message.reply('please tag someone to kill.')
	}
	message.channel.send(pokem
		.replace(/\$mention/g, message.mentions.users.first().username)
		.replace(/\$author/g, message.author.username))
}
