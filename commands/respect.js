const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
        
        let respect = args.join(" ");
        if (!respect) //{
            //let embed = new Discord.RichEmbed()
                //.setTitle(`**${message.author.username}** has paid their respects.`)
                //.setColor('#4E373B')
                //.setFooter(`Press F to pay your respects.`);
            return message.channel.send("test").then(m => m.react("🇫"));
        //}
            let hembed = new Discord.RichEmbed()
                .setTitle(`\u2000`)
                .setColor('#4E373B')
                .setDescription(`${message.author} has paid their respects to ${respect}`)
                .setFooter(`Press F to pay your respects.`);
            message.channel.send({ hembed }).then(m => m.react("🇫"));

}
