const figlet = require('figlet');

exports.run = async (bot, message, args) => {
  
  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>')
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};
