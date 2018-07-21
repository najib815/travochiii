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
                bot.user.setGame(game).catch(e => message.err(e, "while setting game"));
                message.edit(`Successfully set game to \`${game}\`!`);
            } else {
                bot.user.setGame(null).catch(e => message.err(e, "while resetting game"));
                message.edit("Successfully reset game!");
            }
        } catch (e) {
            message.err(e, "while changing game");
            data.logger.err(e.stack)
        }
    }
};
