exports.run = async(bot, message, args, prefix) => {

message.channel.send(`Right now I'm Serving : **${bot.guilds.size}** servers`)
message.react("✅");
}