exports.run = async(bot, message, args) => {      
      
      if ( message.endsWith('?')) {
      let answers = [
      'Maybe.', 'Lol no.', 'I really hope so.', 'Not in your wildest dreams.',
      'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
      'I hope so.', 'Wtf no!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
      'Sorry, bby.', 'fuck, yes.', 'Hell to the no.', 'ehhhhhh, i dont know.',
      'The future is uncertain.', 'I would rather not say.', 'Who cares?',
      'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
      let answer = Math.floor((Math.random() * answers.length));
      let answwer = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle("🎱 | Magic Ball")
          .addField('Your Question :', `args[0]`)
          .addField('My Answer :', `answers[answer]`),
          message.channel.send(answwer)
     } else {
      message.channel.send('Is that a question?')
     }
     
 }
