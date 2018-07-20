const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    if (args.length < 1) {
        throw 'Please provide some text to clapify';
    }

    message.edit(args.map(randomizeCase).join(':clap:'));
};

exports.info = {
    name: 'clap',
    usage: 'clap <text>',
    description: 'Clapifies your text'
};
