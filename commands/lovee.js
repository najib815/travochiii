exports.run = async(bot, message) => {

  const users = bot.users.map(x => x.id);
  const output = users[Math.floor(Math.random() * users.length)];
  const randUser = bot.users.get(output);
  
  const user = message.mentions.users.first();

  min = Math.ceil(0);
  max = Math.floor(100);

  const amount = Math.floor(Math.random() * (max - min)) + min;

  if (message.mentions.users.size < 1) {
    message.channel.send(`${message.author.username} loves ${randUser.username}: ${amount}/${max}`)
  } else {
    message.channel.send(`${message.author.username} loves ${user.username}: ${amount}/${max}`)
  }

  if (amount >= 0 && amount <= 20) {
    message.channel.send('Uh oh, romance isn\'t on the cards for you two :frowning:')
  } else if (amount >= 21 && amount <= 74) {
    message.channel.send('I wouldn\'t expect much, keep your options open... Both of you.')
  } else if (amount >= 75 && amount <= 89) {
    message.channel.send('Ooh, look at you two' + ' ( ͡° ͜ʖ ͡°)') // Ignoring the literal error from ESLint, concat keeps the text readable otherwise it changes font in the editor
  } else if (amount > 90) {
    message.channel.send('So, when\' the wedding? :bride_with_veil::skin-tone-1: :bouquet:')
  }

};
