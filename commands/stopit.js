exports.run = async(bot, message, send) => {
    let member = message.member;
    if (!member.voiceChannel) return send("**You must be in a voice channel for this command.**")
    if (message.guild.member(bot.user).voiceChannel) return send("**Im already playing something.**")

    member.voiceChannel.join().then(voiceConnection => {
        voiceConnection.playFile("./images/stopit.mp3")
        setTimeout(() => voiceConnection.disconnect(), 4000)
    }).catch(console.log)
}

exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: false,
    category: "Special",
    help: "Plays a secret message in VC. Donators only.",
    args: "",
}
