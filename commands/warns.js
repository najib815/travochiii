const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warnings = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let warnedmember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!warnedmember) return message.reply("You need to mention a user.");
  
let warniings = warnings[warnedmember.id].warnings;

  message.reply(`<@${warnedmember.username}> has **${warniings}** warnings.`);

}

module.exports.help = {
  name: "warns"
}
