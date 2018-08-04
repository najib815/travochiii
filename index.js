const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ';!';
const db = require('quick.db');
//const fetch = require('snekfetch');
const fs = require("fs");
const commands = JSON.parse(fs.readFileSync('util/commands.json', 'utf8'));
const games = require("./games.json");




bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase(); 

    if (message.isMentioned(bot.user)) {
          message.channel.send("yes?");
    }
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return; 

    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(bot, message, args, prefix); 
    } catch(e) { 
        message.channel.send('Invalid Command');
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }
   
})
bot.on('ready', () => {
    console.log('I AM READY !')
    bot.setInterval(() => {
	const activity = games[Math.floor(Math.random() * games.length)];
	bot.user.setActivity(activity);
}, 800000);
    bot.user.setStatus('dnd')
    //bot.user.setPresence({ game: { name: `Dev by Sally & Travo`, url: 'https://www.twitch.tv/najib815', type: 1 } });
})
bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Need Verification");
    member.addRole(role).catch(console.error);
});
bot.on('guildCreate', guild => {
 let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
    let embed = new Discord.RichEmbed()
    .setColor(0x6441A4)
    .setDescription(`Hello, I'm **${bot.user.username}** Created and Developed by Sally & Travochii. Thanks for inviting me. \nif you have any questions/suggestions or you face a problem with our bot, we can help you by joining or [Discord Server](https://www.google.com/) or Contacting Us on [Facebook](https://www.google.com/).`)        
    .setFooter("Calm's Bot created and developed by 🍯「Hachimitsu」#4965 & 🍭「Satō」#9098");
defaultChannel.send(embed);
});

bot.login(process.env.TOKEN);
