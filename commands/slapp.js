const idiotAPI = require("idiotic-api");
const { MessageAttachment } = require("discord.js");


exports.run = async(bot, message, args) => {

   return this.verifyUser(message, message.mentions.users.size === 1 ? message.mentions.users.first().id : message.author.id, { msg: message });
   await message.channel.send(new MessageAttachment(await this.bot.idiotAPI.confused(message.author.displayAvatarURL({ format:"png", size:128 }), message.guild.members.random().user.displayAvatarURL({ format: "png", size: 128 })), "confused.png"));
   await message.delete();
}
