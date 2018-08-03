const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    var item = args.slice(1).join(' ');

    if (!user) { var user = bot.user.username; } //Finds the username of the bot and sets it.
    else { var user = message.mentions.users.first(); }

    var health = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
    var action = ["uses their ultimate", "uses boss baby", "calls the boss baby", "uses oven", "uses poisonous covfefe", "calls Michael Stevens", "uses <:1000degree:275751132595486720>"]
    var actitem = [` to smash ${user.username}'s head into the ground`, ` to clean up ${user.username}'s mess`];
	
	if (!item) {
        var response = [`${message.author.username} ${action[~~(Math.random() * action.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    }
    else { 
        var response = [`${message.author.username} uses ${item}${actitem[~~(Math.random() * actitem.length)]}!\n${user.username} loses ${health[~~(Math.random() * health.length)]} hp.\n${user.username} ${action[~~(Math.random() * action.length)]}. ${message.author.username} loses ${health[~~(Math.random() * health.length)]} hp.`];
    }

    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField('1v1', response)
        .setFooter(`1v1ed by ${message.author.username}`);

    message.channel.send({embed});
}
