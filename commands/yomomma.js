const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { text } = await get("http://api.yomomma.info/");
    message.channel.send(JSON.parse(text).joke);
}