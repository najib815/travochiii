const { kill } = require('../commands/arrays.json')

module.exports.run = (bot, message, args) => {

	if (args.join(' ')) {
		return message.channel.send('no you can do it yourself. Please tag someone else to kill.')
	}
	if (!message.mentions.users.first()) {
		return message.channel.send('please tag someone to kill.')
	}
	message.channel.send(bot.randomInArray(kill)
		.replace(/\$mention/g, message.mentions.users.first().username)
		.replace(/\$author/g, message.author.username))
}
