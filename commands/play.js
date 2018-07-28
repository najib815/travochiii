const yt = require("ytdl-core");

exports.run = async(bot, message) => {
  const handler = bot.queue.get(message.guild.id);
  if (!handler) { throw `Add some songs to the mix first with queueadd [Youtube URL]`; }
  
  if (!message.guild.voiceConnection) {
    await bot.commands.get("join").run(bot, message);
    if (!message.guild.voiceConnection) { return; }
    return this.run(bot, message);
  }

  if (handler.playing) { 
    if (message.member.voiceConnection !== message.guild.voiceConnection) { throw "I'm sorry. I'm already playing in another voice channel on your guild!"; }

    throw "I'm already playing in your channel.";
  } else { handler.playing = true; }
    
  (function play(song) {
    if (song === undefined) {
      return message.channel.send("All your selected tunes have been played. I'll be taking my leave now.").then(() => {
      handler.playing = false;
      return message.member.voiceChannel.leave();
    });
  }
    
  message.channel.send(`📻 Playing ${song.requester}'s request: **${song.title}**`).catch(err => bot.emit("log", err, "error"));
  
  return message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes: 2 })
    .on("end", () => { setTimeout(() => {
      handler.songs.shift();
      play(handler.songs[0]);
    }, 100); })
  
    .on("error", err => message.channel.send(`error: ${err}`).then(() => {
      handler.songs.shift();
      play(handler.songs[0]);
    }));
  }(handler.songs[0]));
    
  return null;
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: []
};

exports.help = {
  name: "play",
  description: "Plays the queue of music.",
  usage: "[songURL:str]"
};
