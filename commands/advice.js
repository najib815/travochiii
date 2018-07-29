const request = require('snekfetch');
const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let cn = request("http://api.adviceslip.com/advice", function (err, res, body) {
        try {
            let cnj = JSON.parse(body)
            let aembed = new Disocrd.RichEmbed()
            .setTitle("[:grey_exclamation:] **Advice Machine**")
            .setDescription(`**${cnj.slip.advice}**`)
            .setColor('RANDOM');
            message.channel.send(aembed)
        } catch (e) {
            return message.channel.send("**Advice machine :b:roke**")
        }
    });
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: true,
    category: "Fun",
    help: "Need a little advice?",
    args: "",
}
