const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("List of Commands")
        .setColor(0x703817)
        .addField("Category 1", `${bot.commands.filter(cmd => cmd.help.category === 'Category 1').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 2", `${bot.commands.filter(cmd => cmd.help.category === 'Category 2').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 3", `${bot.commands.filter(cmd => cmd.help.category === 'Category 3').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true);
    message.channel.send(help)
}

exports.help = {
    name: "help",
    category: "Category 1"
}
