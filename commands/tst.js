exports.run = (bot, message, args) => {
      message.channel.send("TEST 123")
      //await message.channel.awaitMessages(msg => {
      if (message.content.startsWith("TEST")) {
      
      message.channel.send("OMG IT WORKS !!")
     // }
      }
}
