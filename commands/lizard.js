const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { body } = await get("https://nekos.life/api/v2/img/lizard");
    await loadingMessage.edit({
      embed: {
        "title": "🦎 | OwO What is This ?",
        "color": 6192321,
        "image": {
          "url": body.url
        },
      }
    });
}