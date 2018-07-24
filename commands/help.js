const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("Calm's bot Commands")
        .setColor(0x703817)
        .addField("TEST 1", "`test`,`tst`")
        .addField("TEST 2", "`test`,`tst`")
        .addField("TEST 3", "`test`,`tst`");
    message.channel.send(help)
}

exports.help = {
    name: "help",
    category: "Category 1"
}
