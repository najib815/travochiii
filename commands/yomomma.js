const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    const { body } = await get("http://api.yomomma.info/");
    message.channel.send(body.joke);
}