const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
  const randomnumber = Math.floor(Math.random() * 100 + 1);
  
  let henEmbed = new Discord.RichEmbed()
       .setColor(`Random`)
       .setTitle("Gay Rate Machine")
       .setDescription(`${message.member.user.username} you are ${randomnumber}% gay! :gay_pride_flag:`)
       .setTimestamp();
  
    if (!args[0]) {
            message.channel.send({henEmbed})
            return;
        }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
  
    let hentaiEmbed = new Discord.RichEmbed()
       .setColor(`Random`)
       .setTitle("Gay Rate Machine")
       .setDescription(`${message.mentions.members.first().user.username} is ${randomnumber}% gay! :gay_pride_flag:`)
       .setTimestamp();
    message.channel.send(hentaiEmbed);
    return;
        }
        message.channel.send({henEmbed})
} 



module.exports.help = {
    name: "gayrate"
}
