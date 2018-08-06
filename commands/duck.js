const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { body } = await get("https://random-d.uk/api/v1/random?type=gif");
    return loadingMessage.edit({
      embed: {
        "title": "🦆 | Quack Quack",
        "color": 6192321,
        "image": {
          "url": body.url
        },
      }
    });
}