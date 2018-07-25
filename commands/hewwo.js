const API = require("idiotic-api");

module.exports.run = async(bot, message, args) => {
    await message.channel.send(new MessageAttachment(
  await bot.API.batSlap(message.author.displayAvatarURL({ format: "png", size: 128 }),
    message.mentions.users.first().displayAvatarURL({ format: "png", size: 128 })),
  "batslap.png"));
  }


module.exports.help = {
    name: "hewwo"
}
