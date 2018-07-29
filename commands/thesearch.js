const Jimp = require('jimp')

exports.run = (bot, message, args) => {
    if (!args[0]) message.suffix = `My name is **${message.author.username}** and I'm stupid cuz I don't provide text`
  Jimp.read("./images/thesearch.png", function(err, image) {
    if (err) console.error(err);
    let text = new Jimp(160, 70, function(err, text) {
      Jimp.loadFont('./fonts/SFtoon.fnt').then(function(font) {
        text.print(font, 0, 0, message.suffix, 130);
        image.composite(text, 65, 330)
          image.getBuffer(Jimp.AUTO, function(err, result) {
            message.channel.send(result);
          });
      });
    });
  });
}

exports.conf = { 
  userPerm: [],
  botPerm: ["SEND_MESSAGES"],
  coolDown: 0,
  dm: false,
  category: "Fun",
  help: "The search continues meme.",
  args: "",
}
