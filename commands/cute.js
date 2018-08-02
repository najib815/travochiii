const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async(bot, message) => {
        randomPuppy('awwnime')
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setFooter(`awwnime`)
                    .setDescription(`[Cute Things](${url})`)
                    .setImage(url)
                    .setColor('#A187E0')
                return message.channel.send({ embed })
})
}
