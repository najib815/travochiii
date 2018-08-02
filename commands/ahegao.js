const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async(bot, message) => {

        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send("🔞 Cannot display NSFW content in a SFW channel.");
        }

        randomPuppy('ahegao')
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setFooter(`ahegao`)
                    .setDescription(`[✌ **daburu piisu ダブルピース** ✌](${url})`)                    
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
}
