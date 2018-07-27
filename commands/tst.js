exports.run = (bot, message, args) => {
      message.channel.send("TEST 123")
      await message.channel.awaitMessages(msg => {
      if (msg.content.startsWith("TEST")) {
      
      message.channel.send("OMG IT WORKS !!")
      }
      }
}
