const { kill } = require('../arrays.json')

module.exports.run = (bot, message, args) => {

	if (args.join(' ')) {
		return message.reply('no you can do it yourself. Please tag someone else to kill.', message)
	}
	if (!msg.mentions[0]) {
		return message.reply('please tag someone to kill.', message)
	}
	message.channel.send(bot.randomInArray(kill)
		.replace(/\$mention/g, message.mentions.users.first().username)
		.replace(/\$author/g, message.author.username))
}
