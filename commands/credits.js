const Discord = module.require("discord.js");

let ccreator = ("**🍯「Hachimitsu」#4965**\n🍭砂糖 「Satō」#9098");

let ccommunity = ("CALM community!");
let flink = (`https://www.facebook.com/travolta.youssef.1`);

let chosting = ("TownHosting by Angelo.");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Makers:", ccreator)
        .addField("Idea's:", ccommunity)
        .addField(`[Click here for more](${flink})`)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}
