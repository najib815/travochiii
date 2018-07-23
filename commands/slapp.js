const idiotAPI = require("idiotic-api");
const { MessageAttachment } = require("discord.js");


exports.run = async(bot, message, args) => {

   await message.channel.send(new MessageAttachment(await bot.idiotAPI.confused(message.author.displayAvatarURL({ format:"png", size:128 }), message.guild.members.random().user.displayAvatarURL({ format: "png", size: 128 })), "confused.png"));
   await message.delete();
}
