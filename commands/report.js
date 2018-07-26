const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    if (!rreason) return message.channel.send("No reason provided");

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Reports")
    .setColor("#FF0000")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);
    
    message.channel.send(`**${rUser}** **Successfully Reported**`);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel. \nPlease creat one. \nName: `Reports`.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
