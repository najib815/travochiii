const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
    const randomnumber = Math.floor(Math.random() * 101);
    const embed = new Discord.RichEmbed()
       .setAuthor(${bot.user.username}, ${bot.user.avatarURL})
       .setTitle("Scanning...")
       .setThumbnail(${message.author.avatarURL})
       .setDescription(`${message.member.user.username} is ${randomnumber}% gay! :gay_pride_flag:`)
       .setColor(0x2471a3)
       .setTimestamp()
       .setFooter(${bot.user.avatarURL});
    
    
    message.channel.send({embed});

};
