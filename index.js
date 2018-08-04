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
        commandFile.run(bot, message, args); 
    } catch(e) { 
        message.channel.send('Invalid Command');
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }
    
    
    if (msg.startsWith(prefix + '8BALL')) {
      if ( msg.endsWith('?')) {
      let answers = [
      'Maybe.', 'Lol no.', 'I really hope so.', 'Not in your wildest dreams.',
      'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
      'I hope so.', 'Wtf no!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
      'Sorry, bby.', 'fuck, yes.', 'Hell to the no.', 'ehhhhhh, i dont know.',
      'The future is uncertain.', 'I would rather not say.', 'Who cares?',
      'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
      let answer = Math.floor((Math.random() * answers.length));
          message.channel.send(answers[answer])
     } else {
      message.channel.send('Is that a question?')
     }
}

    if (msg.startsWith(prefix + 'COOKIE')) {
        let cookie = [
          "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/DANCING_COOKIE.gif",
          "https://media.giphy.com/media/sBs1ITniVp7tm/giphy.gif",
          "https://i.gifer.com/21aK.gif",
          "https://steamusercontent-a.akamaihd.net/ugc/764896935328934464/D7ABB5A6C58BC7A3E20548EC389583BBAC8B0795/",
          "https://orig00.deviantart.net/3742/f/2017/175/2/0/tumblr_orplg1cwxr1u1wqbzo1_540_by_ari_6-dbdxpp7.gif",
          "https://pa1.narvii.com/6451/ab46c5ffc6341ab41b8cee643b82fa0082cd3dc6_hq.gif",
          "https://media0.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif",
          
          
        ]
        let hugresult = Math.floor((Math.random() * cookie.length));
        if (!args[0]) {
            message.channel.send("```You have to mention someone first !```")
            return;
        }
        if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
            const hembed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a Sweet COOKIE :cookie: !!! `)
                .setImage(cookie[hugresult])
                .setTimestamp()
            message.channel.send({
                embed: hembed
            })
            return;
        }
        message.channel.send("```So Sad ! You need someone to give it to you :( ```")
    } 


    if (msg === prefix + 'LOVE') {
        
        message.channel.send(':cherry_blossom: Hey, you have to know that someone, (somewhere,somehow), loves you.:revolving_hearts:');
    }
   
})
bot.on('ready', () => {
    console.log('I AM READY !')
    bot.setInterval(() => {
	const activity = games[Math.floor(Math.random() * games.length)];
	bot.user.setActivity(activity);
}, 5000);
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
