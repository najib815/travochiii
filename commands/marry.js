exports.run = async(bot, message, args) => {

switch (args.length) {
      case 0:
        return message.reply(`this command requires at least one argument.\n\n` +
                  `Please try mentioning a user or use \`+marry list\` to list your current marriages.`)

      case 1:
        if (args[0].match(/<@!?\d+>/)) {
          // User mentioned
          const mentionedUserId = args[0].substring(args[0].indexOf(args[0].match(/\d/)), args[0].indexOf('>'))
          const marriage = new Marriage(mentionedUserId, message.author.id)

          if (await marriage.married()) return message.reply('you two are already married! Whatchu tryin\' to pull? :wink:')
          else {
            message.channel.send(`<@${mentionedUserId}>, do you take <@${message.author.id}>'s hand in marriage? (yes or no) :ring:`).then(m => {
              marriage.getProposalResponse(message.channel, mentionedUserId).then(accepted => {
                if (accepted) {
                  marriage.saveMarriage().then(res => {
                    message.channel.send(`Congratulations, <@${message.author.id}>, you're now married to <@${mentionedUserId}>!`)
                  }).catch(err => {
                    message.channel.send('There seems to have been an error.. If this continues, please contact support.')
                    message.channel.send(err)
                    console.error(`${tools.formattedTime} - There was an error attempting to save a users marriages:`)
                    console.error(err)
                  })
                } else {
                  message.channel.send(`Awww... :cry:`).then(m => {
                    marriage.complete()
                  })
                }
              }).catch(err => {
                if (err === 'time') messae.channel.send(`Sorry <@${message.author.id}>, looks like you won't be getting a response this time around. :cry:`)
                else {
                  message.channel.send(
                    'There was an error when trying to execute the marriage proposal.\n\n' +
                    'Please try again and if it continues to fail, contact support.'
                  )
                  console.error(`${tools.formattedTime} - There was an error attempting to list a users marriages:`)
                  console.error(err)
                }
              })
            })
          }
          return
        } else if (args[0].toLowerCase() === 'list') {
          // List command executed on author
          const marriage = new Marriage(message.author.id)
          const marriedList = await marriage.getMarriedList()
          const embedFields = await marriage.convertIdsToFields(marriedList, this.client)
          const embed = await marriage.generateMarriedListEmbed(message.author.username, embedFields, this.client)

          marriage.complete()
          this._throttles.delete(message.author.id) // Resets throttling timer

          return message.channel.send(embed)
        } else return message.reply(`you have provided an invalid argument. Please check the help for this command.`)

      case 2:
        if (args[0].toLowerCase() === 'list') {
          if (args[1].match(/<@!?\d+>/)) {
            const mentionedUserId = args[1].substring(args[1].indexOf(args[1].match(/\d/)), args[1].indexOf('>'))
            const marriage = new Marriage(mentionedUserId)
            const marriedList = await marriage.getMarriedList()
            const embedFields = await marriage.convertIdsToFields(marriedList, this.client)
            const embed = await marriage.generateMarriedListEmbed(message.author.username, embedFields, this.client)
            marriage.complete()

            return message.channel.send(embed)
          }
        }

        console.log(args)
        return message.channel.send(`There seems to have been a problem.. Please contact support (\`+support\`).`)

      default:
        message.reply(`you have provided an invalid amount of arguments.`)
        break
    }
}
