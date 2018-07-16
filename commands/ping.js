exports.run = (bot, message, args) => {
    message.channel.send(':watch: | Ping!').then(m => {
        m.edit(`:watch: | Pong! \`${m.createdTimestamp - message.createdTimestamp}ms\``);
    });
};

exports.help = {
    name: 'ping',
    usage: 'ping',
    description: 'Pings the bot to check its connection speed.'
};
