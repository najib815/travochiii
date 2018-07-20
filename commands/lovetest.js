 const Discord = require("discord.js");
 
 module.exports.run = async (message, args, bot) => {
    if (!message.mentions.members.size) return message.response(undefined, "Ba-Baka! How will I tell you, how much you love someone. If I don't know who!"); 
    const data = await get(`https://love-calculator.p.mashape.com/getPercentage?fname=${message.member.displayName}&sname=${message.mentions.members.first().displayName}`).set("X-Mashape-Key", process.env.MASHAPE);
    const embed = new RichEmbed()
      .setThumbnail("http://images6.fanpop.com/image/answers/3317000/3317487_1375024940496.53res_300_202.jpg")
      .addField("Lover", data.body.fname)
      .addField("Crush", data.body.sname)
      .addField("Love Percent", data.body.percentage)
      .setFooter(data.body.result)
      .setColor(0xFF0000);
      
    message.channel.send({ embed });
  
  }
