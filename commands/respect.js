const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
const { respect } = args;
        if (respect == 'none') {
            const embed = new Discord.RichEmbed()
                .setTitle(`**${message.author.username}** has paid their respects.`)
                .setColor('#4E373B')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;

        } else {
            const embed = new Discord.RichEmbed()
                .setTitle(`\u2000`)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

            return null;
}

}
