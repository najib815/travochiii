const Canvas = require('canvas');
const fs = require('fs');

exports.run = async(bot, message) => {
   if (args.length < 1) {
    message.channel.send('You must provide some text.');
}
  let Image = Canvas.Image,
    canvas = new Canvas(520, 283),
    ctx = canvas.getContext('2d');
  fs.readFile('./images/fact.png', (err, image) => {
    if (err) return console.log(err);
      let img = new Image
      img.src = image;
      ctx.drawImage(img, 0, 0, 520, 283);
      ctx.font = "18px Papyrus";
      ctx.fillText(args.join(" "), 275, 80)
      canvas.toBuffer((err, buff) => {
        if (err) return console.log(err);
        message.channel.send(buff)
      })
  })
}

exports.conf = {
  userPerm: [],
  botPerm: ["SEND_MESSAGES"],
  coolDown: 0,
  dm: true,
  category: "Fun",
  help: "Add a user to your deathnote",
  args: ""
}
