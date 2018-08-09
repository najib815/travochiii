const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

let color = message.content.split(/\s+/g).slice(1).join(" ");

if (!color) {
            var genColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const embed = new Discord.RichEmbed()
                .setColor(genColour)
                .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
                .setFooter(genColour);
            return message.channel.send('Here\'s your color!', { embed: embed });
}
let colorole = message.guild.createRole({
                name: 'USER-' + message.author.id ,
                color: `color`,
                permissions: []
            })
       message.author.addRole(colorole);
}
