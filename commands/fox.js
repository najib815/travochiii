const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { body } = await get("https://randomfox.ca/floof/");
    await loadingMessage.edit({
      embed: {
        "title": "🦊 | What does the Fox say ?",
        "color": 6192321,
        "image": {
          "url": body.image
        }
      }
    });

}