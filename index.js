const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ';!';
//const fetch = require('snekfetch');
const fs = require("fs");




bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase(); 

    
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return; 

    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(bot, message, args); 
    } catch(e) { 
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
    
    if (msg.startsWith(prefix + 'NOM')) {
        let nom = [
            "https://pa1.narvii.com/6412/817cca674a16306beabb40f1bc42a7b5ef9a4191_hq.gif",
            "https://pa1.narvii.com/6239/bd52e040d9f0e201a5374c849c89102938d8ed86_hq.gif",
            "https://78.media.tumblr.com/35a1a39e5832dee49e04f4958b4e9381/tumblr_omss2uGQI21v9ypo0o1_500.gif",
            "https://pa1.narvii.com/5850/5b1b0989abeb70dd6cedc66bcce899fb16af3876_hq.gif",
            "http://cdn.smosh.com/wp-content/uploads/bloguploads/nom-ferret.gif",
            "https://i.pinimg.com/originals/3c/67/80/3c6780674ef3fe9631c99e76825d73f1.gif",
            "http://i.imgur.com/tKsIDec.gif",
            "https://vignette.wikia.nocookie.net/glee/images/9/97/Anime_nom_gif.gif",
            "https://i.gifer.com/IDRa.gif",
            "https://media.tenor.com/images/a9c1ff73cfbb6dd3eb6212d7ef1daf35/tenor.gif",
            "https://i.gifer.com/EQn9.gif",
            "http://i.imgur.com/L9dLr1J.gif",
            "https://steamusercontent-a.akamaihd.net/ugc/187297348914278278/1E22A22A02C7E8387401740C39659888CAC5DD71/",
            "https://78.media.tumblr.com/abf94574340b87a8a0649d69c5703986/tumblr_ojv4amOX0D1uxybkho2_500.gif",
            "https://www.maxofs2d.net/subdomains/img/gif/misc/reaction_kittynibbling.gif",
          
        ]
        let nomresult = Math.floor((Math.random() * nom.length));
        if (!args[0]) {
            message.channel.send("```Mention who you want to nom nom UwU !!```")
            return;
        }
        if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
            const hembed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`${message.author.username} Noms ${message.mentions.members.first().user.username} ...Meeehh UwU !!! `)
                .setImage(nom[nomresult])
                .setTimestamp()
            message.channel.send({
                embed: hembed
            })
            return;
        }
        message.channel.send("```You Can't Nom Yourself ...UwU !!```")
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

 

    if (msg.startsWith(prefix + 'HUG')) {
        let hug = [
            "https://data.whicdn.com/images/221692186/original.gif",
            "http://mrwgifs.com/wp-content/uploads/2013/04/Ouran-High-School-Host-Club-Love-Hug-Gif.gif",
            "http://images6.fanpop.com/image/photos/33100000/Kyoya-and-Tamaki-ouran-high-school-host-club-33132917-500-375.gif",
            "http://31.media.tumblr.com/4d6525e7b5e546cde555bf2453563335/tumblr_mskyp8XJcb1r40gm7o1_1280.gif",
            "https://i.pinimg.com/originals/34/dc/98/34dc98f17fd5cf558611f14ff9a0c1c9.gif",
            "https://78.media.tumblr.com/6bef64140dfefe6fe86089c6eb11fb9b/tumblr_ohhnjyDJll1vm2xpgo1_500.gif",
            "https://78.media.tumblr.com/806c23dbcf9bde033e708c8679c63975/tumblr_inline_ohhtig3BpF1rz9r19_540.gif",
            "https://i.pinimg.com/originals/0f/48/1b/0f481bfc59229ce8127f2aba52bb8f4a.gif",
            "https://pa1.narvii.com/6276/4461c2a865973bddcc5f4e591a165e09275c7a2c_hq.gif",
            "https://78.media.tumblr.com/7e29c1e560c527de00a9f57bb7d941c3/tumblr_inline_ohi8745BbI1u9qbij_540.gif",
            "https://data.whicdn.com/images/271163043/original.gif",
            "https://78.media.tumblr.com/d00aba2e25ac11a11d9c5a770275dfc8/tumblr_orpdyc83FN1rtwid9o1_500.gif",
            "http://0.media.dorkly.cvcdn.com/33/43/cac85de1cfd2bc4e7bec36631b260156.gif",
            "https://i.pinimg.com/originals/22/8a/c9/228ac960b7c24ffb87374857fa6a0920.gif",
            "https://pa1.narvii.com/6333/8c254b88d099c03be84769075ecac875c5dbb4bb_hq.gif",
            "https://pa1.narvii.com/6449/c5383d0a548987d69aac06e8dc9b270219159b3f_hq.gif",
            "https://media1.tenor.com/images/100c453c2f411189b40e6931ff65a88b/tenor.gif?itemid=7210521",
            "https://i.pinimg.com/originals/e5/0e/c8/e50ec889ef64432e5d4648370014d272.gif",
            "https://78.media.tumblr.com/94f62f2fbca608f70a48e6c04c2dc27c/tumblr_orotkrEC4t1vbbkedo2_540.gif",
            "http://i0.kym-cdn.com/photos/images/original/001/266/481/075.gif",
            "https://data.whicdn.com/images/310192271/original.gif",
            "https://78.media.tumblr.com/064596e2fb0101675b89d79ac41141e0/tumblr_p8g2jmxCLD1qc9mvbo1_540.gif",
        ]
        let hugresult = Math.floor((Math.random() * hug.length));
        if (!args[0]) {
            const ghembed = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setTitle(`${message.author.username} need a hug ! hug him please ...😿😿 `)
                .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
                .setTimestamp()
            message.channel.send({
                embed: ghembed
            })
            return;
        }
        if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
            const hembed = new Discord.RichEmbed()
                .setColor(0xFF0000)
                .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a lovely hug! 😍😍😍`)
                .setImage(hug[hugresult])
                .setTimestamp()
            message.channel.send({
                embed: hembed
            })
            return;
        }
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} need a hug ! hug him please ...😿😿😿 `)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
            .setTimestamp()
        message.channel.send({
            embed: ghembed
        })
    }

    if (msg === prefix + 'LOVE') {
        
        message.channel.send(':cherry_blossom: Hey, you have to know that someone, (somewhere,somehow), loves you.:revolving_hearts:');
    }
    if (msg === prefix + 'FUCK') {

        message.channel.send('You !');
    }
    if (msg === prefix + 'THANKS') {

        message.channel.send('Fuck Off');
    }
    if (msg === prefix + 'SALLY') {
        
        message.channel.send('Is Love:revolving_hearts:');
    }
    if (msg === prefix + 'SERVER') {
        
        const embed = new Discord.RichEmbed()
  //.setTitle("This is your title, it can hold 256 characters")
  //.setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  .addField("Welcome to `саιм` :new_moon: server !",
            "Join us for talks about anything you like, especially if it is Anime, Manga, Games...")             
                  
  .setColor(10689358)
  .setImage("https://cdn.discordapp.com/attachments/467098687915425794/467107224653791232/2bc068a85f9e1c5aaca47c929d44219c.jpg")
  .setTimestamp()

  message.channel.send({embed});
        
    };
  

})
bot.on('ready', () => {
    console.log('I AM READY !')
    
    bot.user.setStatus('dnd')
    bot.user.setActivity('With Sally and Travochi')
})

bot.login(process.env.TOKEN);
