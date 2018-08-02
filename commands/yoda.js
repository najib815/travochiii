const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return message.channel.send("Invalid command usage, you must supply text for Yoda. Yes.");

    const { body } = await get(`http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(args.join(" ").toLowerCase())}`);
    message.channel.send(body.yodish);
}