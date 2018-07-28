exports.run = (message, bot) => {
    if (!message.mentions.members.first().user.username) return message.channel.send('Mention someone.')
    message.channel.send(`**${message.author.username}** *burned* **${message.mentions.members.first().user.username}**\nYou need some ice for that bud? :snowflake:\nhttps://cdn.discordapp.com/attachments/186920285285384192/262348996784291840/image.gif`)
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: false,
    category: "Fun",
    help: "Burn a user.",
    args: "",
}
