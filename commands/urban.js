const Discord = require('discord.js');
const urban = require('relevant-urban');

exports.run = async(bot, message, args, prefix) => {
    const query = message.content.split(/\s+/g).slice(1).join(" ");

    const defs = await (query.length ? urban(query) : urban.random());
    let def, total

    if (!defs) {
        return message.channel.send('No matches found!');
    }

    if (defs.constructor.name === 'Array') {
        total = Object.keys(defs).length

        if (!defs || !total) {
            return message.channel.send('No matches found!');
        }

        def = defs[1]
    } else if (defs.constructor.name === 'Definition') {
        def = defs
    }
    const resultMessage = query.length > 0 ?
            `First result for \`${query}\` on Urban Dictionary:` :
            `Random definition on Urban Dictionary:`
            
    try {
        const embed = new Discord.RichEmbed()
            .setTitle(`**${defs.word}** by **${defs.author}**`)
            .setDescription(defs.definition)
            .addField('Example(s)', defs.example ? defs.example : 'N/A')
            .addField('Rating', `👍\u2000${defs.thumbsUp} | 👎\u2000${defs.thumbsDown}`)
            .addField('Link', `**${defs.urbanURL}**`)
            .setColor('RANDOM')
            .setFooter('Urban Dictionary', 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg');
        return message.channel.send(resultMessage, { embed });

    } catch (err) {
        const embed = new Discord.RichEmbed()
            .setTitle(`**${defs.word}** by **${defs.author}**`)
            .setDescription(defs.definition.split('\n')[0])
            .addField('Example(s)', defs.example ? defs.example : 'N/A')
            .addField('Rating', `👍\u2000${defs.thumbsUp} | 👎\u2000${defs.thumbsDown}`)
            .addField('Link', `**${defs.urbanURL}**`)
            .setColor('RANDOM')
            .setFooter('Urban Dictionary', 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg');
        return message.channel.send(resultMessage, { embed });
    }
}