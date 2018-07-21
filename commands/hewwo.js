
module.exports.run = async(bot, message, args) => {
    await message.channel.send(await this.client.idiotAPI.owoify(args.join(" ")));
  }


module.exports.help = {
    name: "hewwo"
}
