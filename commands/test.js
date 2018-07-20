const Discord = require("discord.js");


module.exports.run = (bot, message, args) => {
  message.channel.send('Testing...').then((msg) => {
    message.edit(`Test ? WhatTheFuck Dude...`);
  });
};
module.exports.help = {
  name: "test"
}
