const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {

    const text = await request.get("http://www.fmylife.com/random");
    const root = HTMLParser.parse(text);
    const article = root.querySelector(".block a");
    const downdoot = root.querySelector(".vote-down");
    const updoot = root.querySelector(".vote-up");
    const disc = article.childNodes[0].text;
    const embed = new Discord.RichEmbed()
      .setTitle("Fuck my Life, Random Edition!")
      .setColor(165868)
      .setThumbnail("http://i.imgur.com/5cMj0fw.png")
      .setFooter(`Requested by: ${message.member.displayName} | Powered By fmylife.com`)
      .setDescription(`_disc\n\n_`)
      .addField("I agree, your life sucks", updoot.childNodes[0].text, true)
      .addField("You deserved it:", downdoot.childNodes[0].text, true);
    message.channel.send({ embed });
}
