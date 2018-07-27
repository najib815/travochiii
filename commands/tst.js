exports.run = async(bot, message, args) => {
      message.channel.send("TEST 123")
      await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("najib")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Here is your help NAJIB`)
                .setColor(`RANDOM`)
                .setTimestamp()
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        }
      })
}
