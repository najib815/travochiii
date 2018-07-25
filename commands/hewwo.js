const idiotAPI = require("idiotic-api");

module.exports.run = async(bot, message, args) => {
    await message.channel.send(await bot.idiotAPI.owoify(args.join(" ")));
  }


module.exports.help = {
    name: "hewwo"
}
