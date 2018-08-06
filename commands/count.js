exports.run = async(bot, message, args, prefix) => {

message.channel.send(`Server counted: **${bot.guilds.size}**`)
message.react("✅");
}