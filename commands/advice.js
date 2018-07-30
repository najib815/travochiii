const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async(bot, message, args) => {
    let cn = get("http://api.adviceslip.com/advice", function (err, res, body) {
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

