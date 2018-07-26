const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warnings = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let warnedmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!warnedmember) return message.reply("Couldn't find them yo");
  
     if(!warnings[warnedmember.id]) warnings[warnedmember.id] = {
    warnings: 0
  };

  warnings[warnedmember.id].warnings++;

  fs.writeFile("./warnings.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
});
let warniings = warnings[warnedmember.id].warnings;

  message.reply(`<@${warnedmember.id}> has ${warniings} warnings.`);

}

module.exports.help = {
  name: "warns"
}
