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
}, 300000);
    bot.user.setStatus('dnd')
    //bot.user.setPresence({ game: { name: `Dev by Sally & Travo`, url: 'https://www.twitch.tv/najib815', type: 1 } });
})
bot.on("guildMemberAdd", function(member) {
    let nvrole = member.guild.roles.find("name", "Need Verification");
    if (!nvrole) {
      try {
          nvrole = member.guild.createRole({
              name: "Need Verification",
              color: "#000000",
              permissions: 67108928,
	      hoist: false,
	      mentionable: false
          })
      } catch (e) {
          console.log(e.stack);
      }
  }
    member.addRole(nvrole.id)
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
bot.on("guildCreate", guild => {
  let guildCreateChannel = bot.channels.get("478534123749900307");
  
  let general = guild.channels.find('name', 'general');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setColor(0x6441A4)
      .setTitle(`Calm bot joined ${guild.name}`)
      .setThumbnail(guild.iconURL)
      //.setURL(invite.url)
      .setDescription(`Here is the invite link to join this server \nInvite Link : ${invite.url} \n**Server Info**`)
      .addBlankField()
      .addField('Server Name', `**${guild.name}**`, true)
      .addField('Server Owner', `**${guild.owner.user.tag}**`, true)
      .addField('Server Members', `**${guild.memberCount}** member`, true)
      
    guildCreateChannel.send(joinEmbed);
  });
}); 

bot.on("guildDelete", guild => {
  let guildCreateDelete = bot.channels.get("478534123749900307");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setColor(0x6441A4)
    .setTitle(`Calm bot left ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .setDescription(`**Server Info**`)
    .addBlankField()
    .addField('Server Name', `**${guild.name}**`, true)
    .addField('Server Owner', `**${guild.owner.user.tag}**`, true)
  
  guildCreateDelete.send(leaveEmbed);
});

bot.login(process.env.TOKEN);
