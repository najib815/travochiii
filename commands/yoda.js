const { get } = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return Promise.reject(new this.client.methods.errors.UsageError("Invalid command usage, you must supply text for Yoda. Yes."));
    
    const { text } = await get(`http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(args.join(" ").toLowerCase())}`);
    message.channel.send(JSON.parse(text).yodish);
}