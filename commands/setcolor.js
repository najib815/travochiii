const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

let color = message.content.split(/\s+/g).slice(1).join(" ");
let RUser = message.guild.member(message.author);
if (!color) {
            var genColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const embed = new Discord.RichEmbed()
                .setColor(genColour)
                .setImage(`https://dummyimage.com/50/${genColour.slice(1)}/&text=%20`)
                .setFooter(genColour);
            return message.channel.send('Here\'s your color!', { embed: embed });
}
let colorole = await message.guild.createRole({
                name: `${RUser.username}'s Color`,
                color: color,
                permissions: []
                
            })
            message.guild.setRolePosition(colorole, -1);
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(colorole, {
                    ADD_REACTIONS: true,        
                    EXTERNAL_EMOJIS: true,
                });
            });
       await (RUser.addRole(colorole.id));
}
