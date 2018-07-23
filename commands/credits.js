const Discord = module.require("discord.js");

let ccreator = ("🍯「Hachimitsu」#4965 & 🍭砂糖 「Satō」#9098");

let ccommunity = ("CALM community!");

let chosting = ("TownHosting by Angelo.");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Makers:", ccreator)
        .addField("Idea's:", ccommunity)
        .addField("For more click here", `https://www.facebook.com/travolta.youssef.1`)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}
