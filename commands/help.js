const Discord = require('discord.js');


exports.run = async(bot, message, args, prefix) => {
    
if (!args[0]) {
    let helpembed = new Discord.RichEmbed()
          .setTitle(`${bot.user.username} Commands !`)
          .setColor('#00BFFF')
          .addField("🐱Animals🐶", "`;!help animals` \n10 Commands available", true) 
          .addField("🎭Fun🎲", "`;!help fun` \n17 Commands available", true)
          .addField("😂Reactions😭", "`;!help react` \n9 Commands available", true) 
          .addField("😈NSFW🔥", "`;!help nsfw` \n16 Commands available", true)
          .addField("😂Memes👌", "`;!help memes` \n8 Commands available", true)   
          .addField("👮Moderation🔒", "`;!help mod` \n6 Commands available", true)
          .addField("📷Image🎨", "`;!help image` \n5 Commands available", true)
          .addField("🆗Text🈂", "`;!help text` \n3 Commands available", true) 
          .addField("⚒Utility⛏", "`;!help utility` \n12 Commands available", true)
          //.addBlankField() 
          //.addField(`\u2000`, "If you need more help, feel free to join our Discord Support [Server](https://discord.gg/bP3hZJ4)")
          .setFooter(`${bot.user.username} Created and Developed by Sally & Travochii.`);
            message.channel.send(helpembed)
            return;
} if (args[0] === "fun") {
    let funembed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .addField("🎭Fun Commands🎲", "`1v1`,`8ball`,`burn`,`cookie`,`cute`,`girl`,`feed`,`fmk`,`gayrate` \n`kill`,`love`,`notice`,`nya`,`potato`,`rem`,`slots`,`waifurate`")
          .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "animals") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("🐱Animals🐶", "`bird`,cat`,`dog`,`bunny`,`duck`,`fox`,`lizard`,`lion`,`tiger`,`panda`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "nsfw") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("😈NSFW Commands🔥", "`ahegao`,`boobs`,`feet`,`fuck`,`hanal`,`hcum`,`hentai`,`loli`,`spank` \n`tits`,`trap`,`pgif`,`4k`,`anal`,`pussy`,`ass`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "memes") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("😂Memey Commands👌", "`changemymind`,`joke`,`meme`,`net`,`owo`,`respect`,`trump`,`tweet`")
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
            .addField("⚠️ Note:", 'To use verify command and make it works perfectly u have to follow these instructions : \n**1**-Creat a new roll and name it "Need Verification" . \n**2**-Creat a new channel and name it "log_channel" better make it private. \n**3**-Creat another roll ,name it "Verified User" . \nIf you need more help, feel free to join our [server](https://discord.gg/bP3hZJ4)')
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed);
} else if (args[0] === "image") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("📷Image Editing🎨", "`captcha`,`death`,`kidnap`,`suicide`,`trigger`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed); 
} else if (args[0] === "text") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("🆗Text Editing🈂", "`ascii`,`clap`,`emojify`")
            .setFooter(`Use ${prefix} before every single Command.`);
    message.channel.send(funembed); 
} else if (args[0] === "utility") {
    let funembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField("⚒Utility Commands⛏", "`anime`,`avatar`,`count`,`help`,`ping`,`invite`,`report`,`serverinfo`,`urban`,`userinfo`,`weather`")
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
}

    */
