const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {

    let meow = message.content.split(" ").slice(1);
    let respect = meow.join(' ');
     if (!respect) {
            const rembed = new Discord.RichEmbed()
                .setAuthor(`${message.author.username} has paid their respects.`, message.author.AvatarURL)
                .setColor('#4E373B')
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ rembed }).then(m => m.react("🇫"));
              } 
            const embed = new Discord.RichEmbed()
                .setAuthor(`\u2000`, message.author.AvatarURL)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ embed }).then(m => m.react("🇫"));

}
