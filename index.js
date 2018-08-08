const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ';!';
const db = require('quick.db');
//const fetch = require('snekfetch');
const fs = require("fs");
const xp = JSON.parse(fs.readFileSync('JSON/xp.json', 'utf8'));
const commands = JSON.parse(fs.readFileSync('util/commands.json', 'utf8'));
const games = require("./games.json");




bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase(); 

    let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor('RRANDOM')
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
});	
	
 
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
}, 300000);
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
    .setDescription(`Hello, I'm **${bot.user.username}** Created and Developed by Sally & Travochii. Thanks for inviting me. \nIf you have any questions/suggestions or you need help feel free to join our [Discord Server](https://discord.gg/bP3hZJ4) \nOr add us on Discord : `)
    .addField("👩‍ Sally 🌸", '**S Marokkanskiy#4965**', true)
    .addField("👨‍ Travo 💛", '**N Travolta#9098**', true)
    .addBlankField()
    .addField("Usage :", `Prefix "${prefix}"`, true)   
    .addField("Commands :", `${prefix}help for commands list`, true)     
    .setFooter("Calm Bot created and developed by S Marokkanskiy#4965 & N Travolta#9098");
defaultChannel.send(embed);
});

bot.login(process.env.TOKEN);
