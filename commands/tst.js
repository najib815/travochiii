exports.run = async(bot, message, args) => {
      message.channel.send("TEST 123")
      await message.channel.awaitMessages(msg => {
      if (message.startsWith("TEST")) {
      
      message.channel.send("OMG IT WORKS !!")
      }
      })
}
