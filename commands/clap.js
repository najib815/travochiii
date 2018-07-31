const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = async(bot, message, args) => {
    if (args.length < 1) {
        message.channel.send('Please provide some text to clapify');
    }

    message.channel.send(args.join(':clap:'));
};

exports.info = {
    name: 'clap',
    usage: 'clap <text>',
    description: 'Clapifies your text'
};
