const dateFormat = require('dateformat');

dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = async (bot, message) => {
    //Makes sure command is sent in a guild
    if (!message.guild) {
        throw 'This can only be used in a guild!';
    }

    //Makes sure user mentions a user to get info for
    if (message.mentions.users.size < 1) {
        throw '@mention someone to find the info';
    }

    let user = message.mentions.users.first();
    let member = message.guild.member(user);

    if (!member) {
        throw 'That member could not be found!';
    }

    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

    let embed = bot.utils.embed(
        `${user.username}#${message.mentions.users.first().discriminator}`,
        '***This message will dissappear in 60 seconds.***',
        [
            {
                name: 'Status',
                value: `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`,
            },
            {
                name: 'Game',
                value: `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`,
            },
            {
                name: 'Created On',
                value: `${dateFormat(user.createdAt)}`,
            },
            {
                name: 'Days Since Creation',
                value: `${daysCreated.toFixed(0)}`,
            },
            {
                name: 'Joined On',
                value: `${dateFormat(member.joinedAt)}`,
            },
            {
                name: 'Days Since Joining',
                value: `${daysJoined.toFixed(0)}`,
            },
            {
                name: 'Roles',
                value: `${roles.join(', ')}`,
                inline: false,
            },
        ],
        {
            inline: true,
            footer: `User ID: ${user.id}`,
            thumbnail: user.displayAvatarURL
        }
    );

    (await message.edit({ embed })).delete(60000);
};

exports.info = {
    name: 'userinfo',
    usage: 'userinfo <user>',
    description: 'Shows info about a user'
};
