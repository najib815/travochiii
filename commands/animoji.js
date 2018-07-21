module.exports.exec = async(bot, message, args) => {
  if (!args.name) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return bot.emit('commandUsage', message, this.help);
  }

  let emoji = message.guild.emojis.find('name', args.name);

  if (emoji) {
    message.channel.send({
      files: [ emoji.url ]
    }).catch(e => {
      bot.log.error(e);
    });
  }
};

module.exports.config = {
  aliases: [ 'animote' ],
  enabled: true,
  argsDefinitions: [
    { name: 'name', type: String, defaultOption: true }
  ]
};

module.exports.help = {
  name: 'animoji',
  description: 'Sends a large version of the specified animated emoji of your Discord server. And Nitro isn\'t required.',
  botPermission: '',
  userTextPermission: 'ADD_REACTIONS',
  userVoicePermission: '',
  usage: 'animoji <ANIMATED_EMOJI_NAME>',
  example: [ 'animoji PartyWumpus' ]
};
