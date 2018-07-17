const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    const subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    const sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`cosplay.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./cosplay.jpg`)
            })
        })
}
