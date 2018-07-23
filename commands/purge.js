const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
     if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");

     const deleteCount = parseInt(args[0], 10);
    
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
	var cleanEmbed = new Discord.RichEmbed()            
            .setAuthor('Clean Embed')
            .setDescription(`Cleaned **${args[1]}** messages :white_check_mark:`)
            .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
            .setColor('#ffffff');
            message.channel.send(cleanEmbed);
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
