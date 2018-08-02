const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async(bot, message, args) => {
            const { body } = await get(`http://api.adviceslip.com/advic`);
    
            let aembed = new Disocrd.RichEmbed()
            .setTitle("[:grey_exclamation:] **Advice Machine**")
            .setDescription(`**${body.slip.advice}**`)
            .setColor('RANDOM');
    
            message.channel.send(aembed)
    
        } 
