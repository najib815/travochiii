const emojiMap = require("../emojiMap.json");

module.exports = {
    name: "emojify",
    description: "Emojifys text",
    aliases: [],
    usage: "emojify <text>",
    group: "fun",
    allowDM: true,
    run(bot, message, args, data) {
        try {
            if (args.length === 0) {
                data.logger.warn("You didn't provide any text!");
                return message.edit(`Invalid format. Please do \`${bot.prefix}${this.usage}\``)
            } else {
                const split = args.join(" ").toLowerCase().split("");
                const emojified = split.map(a => emojiMap[a]);
                message.edit(emojified.join("")).catch(() => message.edit("Too big to send"));
            }
        } catch (e) {
            message.err(e, "while emojifying");
            data.logger.err(e.stack);
        }
    }
};
 
