exports.exec = async (bot, message, args) => {
  try {
    let user, member;
    if (message.mentions.users.size) {
      user = message.mentions.users.first();
    }
    else if (args.id) {
      member = await message.guild.fetchMember(args.id);
      if (member) {
        user = member.user;
      }
    }
    if (!user) {
      user = message.author;
    }
    if (!member) {
      member = await message.guild.fetchMember(user.id);
    }
    let nick = member.nickname;
    if (!nick) {
      nick = '-';
    }
    let status = user.presence.status;
    if (status === 'online') {
      status = 'Online';
    }
    else if (status === 'idle') {
      status = 'Idle';
    }
    else if (status === 'dnd') {
      status = 'Do Not Disturb';
    }
    else {
      status = 'Offline';
    }
    let activity;
    if (user.presence.game) {
      activity = `${bot.Constants.ActivityTypes[user.presence.game.type]} ${user.presence.game.name}`;
    }
    else {
      activity = 'None';
    }
    let roles = member.roles.map(r => r.name).slice(1).join('\n');
    if (roles.length === 0) roles = '-';

    let mutualGuilds = await bot.methods.getMutualGuilds(user);

    message.channel.send({
      embed: {
        color: bot.colors.BLUE,
        title: `${user.bot ? 'Bot' : 'User'} Info`,
        fields: [
          {
            name: 'Name',
            value: user.tag,
            inline: true
          },
          {
            name: 'ID',
            value: user.id,
            inline: true
          },
          {
            name: 'Nickname',
            value: nick,
            inline: true
          },
          {
            name: 'Roles',
            value: roles,
            inline: true
          },
          {
            name: 'Joined Server',
            value: member.joinedAt.toUTCString(),
            inline: true
          },
          {
            name: 'Joined Discord',
            value: user.createdAt.toUTCString(),
            inline: true
          },
          {
            name: 'Status',
            value: status,
            inline: true
          },
          {
            name: 'Activity',
            value: activity,
            inline: true
          }
        ],
        thumbnail: {
          url: user.displayAvatarURL
        },
        footer: {
          text: `${message.guild.ownerID === user.id ? 'Server Owner •' : ''} Shares ${mutualGuilds} servers with me.`,
          icon_url: `${message.guild.ownerID === user.id ? 'https://i.imgur.com/2ogsleu.png' : ''}`
        }
      }
    }).catch(e => {
      bot.log.error(e);
    });
  }
  catch (e) {
    bot.log.error(e);
  }
};

exports.config = {
  aliases: [ 'uinfo' ],
  enabled: true,
  argsDefinitions: [
    { name: 'id', type: String, defaultOption: true }
  ]
};

exports.help = {
  name: 'userInfo',
  description: 'Shows information of a specified user of your Discord server.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'userInfo [@USER_MENTION | USER_ID]',
  example: [ 'userInfo @user#0001', 'userInfo 167122669385743441', 'userInfo' ]
};
