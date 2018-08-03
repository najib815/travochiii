const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

  var user = message.mentions.users.first();
  if (!user) {
var whatif = [`in the head`, `in the face`, `in the foot`, `in the knee`]
var character = ["Sportacus", "Robbie Rotten", "Pie", "Discord", "Hitler", "Grandayy", "Michael Stevens", "Annoying Orange", "PewDiePie", "Keemstar", "Scarce", "Valivia", "Michael Rosen", "RazorBlade", "John"]
var action = [`misses`, `captures ${character[~~(Math.random() * character.length)]}** instead`, `hits **${character[~~(Math.random() * character.length)]}** ${whatif[~~(Math.random() * whatif.length)]} instead`, `kills **${character[~~(Math.random() * character.length)]}** instead`, `shoots **${character[~~(Math.random() * character.length)]}** ${whatif[~~(Math.random() * whatif.length)]} instead`]
var response = [`**${message.author.username}** throws the net at **${character[~~(Math.random() * character.length)]}** but ${action[~~(Math.random() * action.length)]}.`]
const embed1 = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField('Net', response[~~(Math.random() * response.length)])
.setFooter(`Thrown by ${message.author.username}`)
return message.channel.send(embed1);
}
var whatif = [`in the head`, `in the face`, `in the foot`, `in the knee`, `in the dick`, `in the deadly lazer`]
var character = ["Sportacus", "Robbie Rotten", "Pie", "Discord", "Hitler", "Grandayy", "Michael Stevens", "Annoying Orange", "PewDiePie", "Keemstar", "Scarce", "Valivia", `${user.username}`, "Michael Rosen", "RazorBlade", "John"]
var action = [`misses`, `captures **${character[~~(Math.random() * character.length)]}** instead`, `hits **${character[~~(Math.random() * character.length)]}** ${whatif[~~(Math.random() * whatif.length)]} instead`, `kills **${character[~~(Math.random() * character.length)]}** instead`, `shoots **${character[~~(Math.random() * character.length)]}** ${whatif[~~(Math.random() * whatif.length)]} instead`]
var response = [`**${message.author.username}** throws the net at **${user.username}** but ${action[~~(Math.random() * action.length)]}.`]
const embed2 = new Discord.RichEmbed()
.setColor(0xFFB200)
.setTimestamp()
.addField(`**${message.author.username}** throws the Net at **${user.username}**`, response[~~(Math.random() * response.length)])
.setFooter(`Thrown by ${message.author.username}`)
message.channel.send(embed2);
}
