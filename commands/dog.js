const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { body } = await get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : "https://dog.ceo/api/breeds/image/random");
    await message.channel.send({
      embed: {
        "title": "🐕 | Hotto Dogu UwU",
        "color": 6192321,
        "image": {
          "url": body.message
        }
      }
    });

}