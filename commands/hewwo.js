  exports.run = async (bot, message, args, level) => {
    if (args.length < 1) return Promise.reject(new this.client.methods.errors.UsageError("You need to give the bot a message to send.", message));
    return Promise.resolve();
  }

  async run(message, args) {
    await message.channel.send(await this.client.idiotAPI.owoify(args.join(" ")));
  }


module.exports = Hewwo;
