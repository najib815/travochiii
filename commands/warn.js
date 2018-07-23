const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
let userCom = bot.users.get(args[0]) || msg.mentions.users.last();
let avatar = userCom.displayAvatarURL;

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 
   let warnedmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!warnedmember) return ("Please mention a user to warn.");
     let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
   
    
      message.delete().catch(O_o=>{});
    message.channel.send(`***${warnedmember.user.tag} was warned!***`)
    
    let wembed = new Discord.RichEmbed()
       .setTitle="⚠️ WARRNING !!"
       .setThumbnail(avatar)
       .addField('You have been warned', `In: **${message.guild.name}**\n`)
       .addField('Warned by :', `**${message.author.username}**\n`)
       .addField('Reason :', `**${reason}**\n`)
       .setColor('#FF0000')
       .setTimestamp();
   await warnedmember.send(wembed)
   }
