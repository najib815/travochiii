const Discord = require("discord.js");
const { get } = require("snekfetch");
 
 module.exports.run = async(bot, message, args) {
    const { body } = await get("https://rra.ram.moe/i/r?type=owo");
    await message.edit({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`,
        "color": 6192321,
        "image": {
          "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
        },
        "footer": {
          "icon_url": message.author.displayAvatarURL({ format: "png", size: 32 }),
          "text": `Requested by ${message.author.tag}`
        }
      }
    });

  }
 module.exports.help = {
    name: "owo"
}
