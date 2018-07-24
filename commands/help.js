const Discord = require('discord.js');
const fs = require("fs");
const commands = JSON.parse(fs.readFileSync('util/commands.json', 'utf8'));


module.exports.run = async (bot, message, args, tools, con) => {
    try {
        await message.author.send(`Commands: \n\n${bot.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`);
        message.channel.send("Help sent.");
    } catch (e) {
        throw e;
    }
}
exports.help = {
        name: "help"
    }
