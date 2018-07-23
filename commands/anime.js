const Discord = require('discord.js');
var aq = require('animequote');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();

module.exports.run = async(message, args, bot) => {
    function filter(msg) {
      if (msg.author.id !== message.author.id) return false;
      return ["1", "2", "3", "4", "5"].includes(msg.content);
    }
    if (args.length < 1) return message.reply("You must add an anime to search for");
    let msg = await message.channel.send("*Fetching information from Kitsu!*");
    try {
      const { data } = await kitsu.fetch("anime", { filter: { text: args.join("-") } });
      if (data.length < 1) throw new bot.methods.errors.AnimeError("No result found");
      msg = await msg.edit(`Okay, I found 5 possible matches!~ Which one do you want to see~\n(Just write the number, the one you want to see! Cancels in 60 seconds.)${this.makeTitles(data)}`);
      const collected = await message.channel.awaitMessages(filter, { max: 20, maxProcessed: 1, time: 60000, errors: ["time"] });
      const returnMessage = collected.first();
      const index = Number(returnMessage.content) - 1;
      if (message.channel.permissionsFor(bot.user).has("MANAGE_MESSAGES")) await returnMessage.delete(); 
      await msg.edit(`**Title JP:** ${data[index].titles.en_jp}\n**Title English:** ${data[index].titles.en}\n**Type:** ${data[index].subtype}\n**Start Date:** ${data[index].startDate}\n**End Date:** ${data[index].endDate || "in Progress"}\n**PopularityRank:** ${data[index].popularityRank}\n**Link:** <https://kitsu.io/anime/${data[index].id}>\n**Synopsis:** ${data[index].synopsis}`);
    } catch (error) {
      if (error instanceof Collection) return message.reply("command canceled due to the timer~");
      throw error;
    }
  }
