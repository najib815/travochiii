const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {

const { body } = await get("http://random.birb.pw/tweet/");
return message.channel.send({
  embed: {
    "title": "🕊️ | Birduu",
    "color": 6192321,
    "image": {
      "url": `https://random.birb.pw/img/${body}`
    }
  }
});
}