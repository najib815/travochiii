const { get } = require("snekfetch");
const Discord = require("discord.js");

  exports.run = async(bot, message, args) {
    const { text } = await get("https://getpuns.herokuapp.com/api/random");
    const embed = new Discord.RichEmbed()
      .setThumbnail("https://cdn.discordapp.com/emojis/257279894885498890.png")
      .setDescription(`_${JSON.parse(text).Pun}_`)
      .setColor(6192321);

    await message.channel.send({ embed });
 
}

module.exports = PunJoke;
