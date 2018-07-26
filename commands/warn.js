const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async(bot, message, args) => {
let userCom = bot.users.get(args[0]) || message.mentions.users.last();
let avatar = userCom.displayAvatarURL;

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 
   let warnedmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!warnedmember) return ("Please mention a user to warn.");
     let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
   
   if(!warns[warnedmember.id]) warns[warnedmember.id] = {
    warns: 0
  };

  warns[warnedmember.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
});
   let warniings = warns[warnedmember.id].warns;
    
    message.delete().catch(O_o=>{});
    message.channel.send(`***${warnedmember.user.tag} was warned!*** \n**Already has ${warniings} Warnings**`)
    
    let wembed = new Discord.RichEmbed()
       .setTitle("⚠️ WARNING !!")
       .setThumbnail(avatar)
       .addField('>You have been warned in:', `**${message.guild.name}**\n`)
       .addField('>Warned by :', `**${message.author.username}**\n`)
       .addField(">Number of Warnings", `**${warniings}** Warnings\n`)
       .addField('>Warning Reason :', `**${reason}**\n`)
       .setColor('#FF0000')
       .setTimestamp();
   await warnedmember.send(wembed)
   }
