const Discord = require('discord.js');


exports.run = async(bot, message, args, prefix) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`**${bot.user.username}** Commands !`)
          .setColor('#00BFFF')
          .addField("🐱Animals🐶", "`;!help animals` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .addField("🎭Fun🎲", "`;!help fun` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("😂Reactions😭", "`;!help react` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .addField("😈NSFW🔥", "`;!help nsfw` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("😂Memes👌", "`;!help memes` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)   
          .addField("👮Moderation🔒", "`;!help mod` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("📷Image🎨", "`;!help image` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true)
          .addField("🆗Text🈂", "`;!help text` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .addField("⚒Utility⛏", "`;!help utility` \n[Coming Soon](https://www.facebook.com/travolta.youssef.1)", true) 
          .setFooter(`[${bot.user.username}] Created and Developed by Sally & Travochii.`);
            message.channel.send(helpembed)
            return;
} if (args[0] === "fun") {
    let funembed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .addField("🎭Fun Commands🎲", "`1v1`,`8ball`,`burn`,`cookie`,`cute`,`girl`,`feed`,`fmk`,`gayrate` \n`kill`,`love`,`notice`,`nya`,`potato`,`rem`")
          .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "animals") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("🐱Animals🐶", "`cat`,`dog`,`bunny`,`duck`,`lizard`,`...`,`...`,`...`,`...`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "nsfw") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("😈NSFW Commands🔥", "`ahegao`,`boobs`,`feet`,`fuck`,`hanal`,`hcum`,`hentai`,`spank`,`tits` \n`trap`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "memes") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("🎭Memey Commands🎲", "`changemymind`,`joke`,`meme`,`net`,`owo`,`respect`,`trump`,`tweet`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "react") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("😂 Reactions 😭", "`cry`,`hug`,`kiss`,`lick`,`nom`,`slap`,`stare`,`tickle`,`poke`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "mod") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!");
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("👮Mod Commands🔒", "`purge`,`rename`,`say`,`verify`,`warn`,`warns`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
}
}
//\n,``,``,``,``,``,``,``

/*
else if (args[0] === "..") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("..", "``,``,``,``,``,``,``,``,``")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed); 
    */