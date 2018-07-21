module.exports = {
    name: "setgame",
    description: "Sets your playing status",
    aliases: ["setgame", "changegame", "playing"],
    usage: "setgame <new game>",
    notes: "- Giving no arguments resets your game",
    group: "util",
    allowDM: true,
    run(bot, message, args, data) {
        try {
            const game = args.join(" ").trim();
            if (game) {
                bot.user.setActivity(game).catch(e => message.err(e, "while setting game"));
                message.channel.send(`:white_check_mark:Successfully set game to \`${game}\`!`);
            } else {
                bot.user.setActivity(null).catch(e => message.err(e, "while resetting game"));
                message.channel.send(":arrows_counterclockwise:Successfully reset game!");
            }
        } catch (e) {
            message.err(e, "while changing game");
            data.logger.err(e.stack)
        }
    }
};
