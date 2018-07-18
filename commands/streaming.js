const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  if (message.author.id !== ('184761349132386306')) return message.channel.send("Huh.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Name streaming status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   bot.user.setPresence({ game: { name: `${status}`, url: 'https://www.twitch.tv/najib815', type: 1 } });
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: You sucessfully changed streaming status');
  message.channel.send({ embed });
}};
