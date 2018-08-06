const Discord = require('discord.js');

exports.run = async(bot, message, args, prefix) => {
  var define = message.content.substring(prefix.length + 5);
  var urban = require('urban'),
  define = urban(define);
  
  define.first(function(json) {
    try {
      const embed = new Discord.RichEmbed()
          .setColor(0xFFB200)
          .setTimestamp()
          .addField(`Definition of ${json.word}`, `${json.definition}`)
          .setFooter(`Made by: ${json.author}`);
      
      if (json.example.length > 0) { embed.addField("Example", `${json.example}`); }
      message.channel.send({embed});
    }
    catch (err) {
      var reason = args.join(' ');
      const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(`:(`, `I couldn't find the definition of **${reason}.**`);
      message.channel.send({embed: embed1});
    }
  });
}