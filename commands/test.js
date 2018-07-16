const Discord = require("discord.js");


module.exports = (bot, message, args) => {
  message.channel.send('Pong...').then((msg) => {
    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
  });
};
module.exports.help = {
  name: "ping"
}
