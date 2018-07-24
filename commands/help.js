const Discord = require('discord.js');
const fs = require("fs");
const commands = JSON.parse(fs.readFileSync('util/commands.json', 'utf8'));

module.exports.run = (bot, message, args) => {
     for (var cmd in commands) {
     const onlyHelp = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setTitle("Commands")
              .addField('${commands[cmd].name} commands','TEST TEST EST');
          let commandsFound = 0;
            }
            message.channel.send({onlyHelp})
}
