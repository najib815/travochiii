module.exports = {
  // Information
  name: 'gayrate',
  aliases: ['gay', 'g%', '%g'],
  description: 'ThisSHitty Bot will tell you how gay you\'re.',
  // Requirements
  // Function
  run: (bot, message, args) => {
    const randomnumber = Math.floor(Math.random() * 101);
    message.channel.send({
      embed: {
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL,
        },
        title: 'Scanning...',
        thumbnail: {
          url: message.author.avatarURL,
        },
        description: `${message.member.user.username} is ${randomnumber}% gay! :gay_pride_flag:`,
        color: 0x2471a3,
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: bot.config.embed.footer,
        },
      },
    });
  },
};
