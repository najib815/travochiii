const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
    const randomnumber = Math.floor(Math.random() * 100 + 1);
    const embed = new Discord.RichEmbed()
       .setColor(`Random`)
       .setTitle("Gay Rate Machine")
       .setDescription(`${message.member.user.username} you are ${randomnumber}% gay! :gay_pride_flag:`)
       .setTimestamp();
    
    
    message.channel.send({embed});

};
