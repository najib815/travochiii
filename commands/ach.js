const idiotAPI = require("idiotic-api");

exports.run = async(bot, message, args) => {

await message.channel.send({ files: [{ attachment: await bot.idiotAPI.achievement(message.author.displayAvatarURL({format:"png", size:32}), args.join(" ")), name: "achievement.png" }] });
}
