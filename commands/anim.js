exports.run = (bot, message, args) => {
    let parsed = bot.utils.parseArgs(args, 'd:');

    if (parsed.leftover.length < 1) {
        throw 'Please provide some emojis to use!';
    }

    let frames = parsed.leftover;
    let content = frames.join(' ');

    if (content.indexOf('|') > -1) {
        frames = content.split('|');
    }

    let delay = isNaN(parsed.options.d) ? 250 : parsed.options.d;

    bot.utils.playAnimation(message, delay, frames);
};

exports.info = {
    name: 'anim',
    usage: 'anim [-d <delay>] <emoji> [emoji2] [...]',
    description: '"Animates" a series of emojis'
};
