const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

const { respect } = args;
        if (respect == 'none') {
            const embed = new Discord.RichEmbed()
                .setAuthor(`${message.author.username} has paid their respects.`, message.author.AvatarURL)
                .setColor('#4E373B')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;

        } else {
            const embed = new Discord.RichEmbed()
                .setAuthor(`\u2000`, message.author.AvatarURL)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

return null;
}
}
