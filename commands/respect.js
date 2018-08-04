const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
        
 let respect = args.join(" ").slice(22);
        if (!respect) {
            const embed = new Discord.RichEmbed()
                .setTitle(`**${message.author.username}** has paid their respects.`)
                .setColor('#4E373B')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return;
        }
            const embed = new Discord.RichEmbed()
                .setTitle(`\u2000`)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

}
