const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

            if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
            if (bot(args[1])) return message.channel.send(':warning: `Please supply a valid amount of messages to purge`');
            if (args[1] > 100) return message.channel.send(':warning: `Please supply a number less than 100`');
            message.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()            
            .setAuthor('Clean Embed')
            .setDescription(`Cleaned **${args[1]}** messages :white_check_mark:`)
            .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
            .setColor('#ffffff');
            message.channel.send(cleanEmbed);
      
}
