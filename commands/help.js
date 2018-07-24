const Discord = require('discord.js');
const fs = require("fs");
const commands = JSON.parse(fs.readFileSync('util/commands.json', 'utf8'));

module.exports.run = (bot, message, args) => {
     const onlyHelp = new Discord.RichEmbed()
               .setColor('RANDOM')
            
            let commandsFound = 0;
            
            for (var cmd in commands) {
              onlyHelp.addField('${commands[cmd].type} commands');
            }
            message.channel.send({onlyHelp})
}
