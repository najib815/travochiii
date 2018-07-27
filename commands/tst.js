exports.run = (bot, message, args) => {
      message.channel.send("TEST 123")
      if (message.content.startsWith(TEST)) {
      
      message.channel.send("OMG IT WORKS !!")
      }
}
