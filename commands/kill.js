module.exports.run = (bot, message, args) => {


	if (args.join(' ').includes('me')) {
		return Memer.reply('no you can do it yourself. Please tag someone else to kill.', message)
	}
	if (!message.mentions[0]) {
		return bot.reply('please tag someone to kill.', msg)
	}
	msg.channel.createMessage(bot.randomInArray(kill)
		.replace(/\$mention/g, message.mentions[0].username)
		.replace(/\$author/g, message.author.username))
}
