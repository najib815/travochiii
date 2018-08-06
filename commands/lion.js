const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {

const { body } = await get("https://animals.anidiots.guide/lion");
await loadingMessage.edit({
  embed: {
    "url": body.link,
    "color": 6192321,
    "image": {
      "url": body.link
    },
  }
});
}