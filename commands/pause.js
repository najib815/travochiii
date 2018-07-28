exports.run = async (bot, message) => {
  if (!message.guild.voiceConnection) { throw `I am not connected in a voice channel, please add some songs to the mix first with ${msg.guild.settings.prefix}queueadd`; }
  if (message.guild.voiceConnection.dispatcher.paused) { return message.send("The stream is already paused, baka!"); }

  message.guild.voiceConnection.dispatcher.pause();
  return message.send("⏸ The mix is now paused.");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "pause",
  description: "Pauses the playlist.",
  usage: "",
  usageDelim: "",
  extendedHelp: "",
};
