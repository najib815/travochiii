const Discord = require("discord.js");

exports.run = function(bot, message) {
        var phrases = [
            'Add me to your server with this link!',
            'I-It\'s not like I want to be invited to your server...',
            'Invite me Onii-chan!',
            'Hello... Please take me...',
            'I\'d love to be in your server!',
            'B-Baka! u///u I-I\'s not like I wanted to be in your server...',
            'Kyaaa~~ A server? Of course!',
            'P-Please invite me.. to your server...'
        ]

var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];

	const embed = new Discord.RichEmbed()
    	.setColor(0xFFB200)
    	.setTimestamp()
    	.setDescription(`[${phrase}](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146954737)`);
   	message.channel.send({embed});
}
