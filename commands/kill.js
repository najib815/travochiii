const { kill } = require('../arrays.json');

module.exports.run = (bot, message, args) => {


	if (args.join(' ').includes('me')) {
		return bot.reply('no you can do it yourself. Please tag someone else to kill.', message)
	}
	if (!message.mentions[0]) {
		return bot.reply('please tag someone to kill.', message)
	}
	message.channel.send(bot.randomInArray(kill)
		.replace(/\$mention/g, message.mentions[0].username)
		.replace(/\$author/g, message.author.username))
}
