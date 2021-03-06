const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    message.delete()
        // Check if user has the permission to use the command.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send('⚠️ **You need the** \*`Staff*\` **role to use this command.** ⚠️')
            .then(m => m.delete(30000));
    }
    // Mention the user that you want to verify
    let toverify = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    // Find the role 'Verified User'
    let verifyrole = message.guild.roles.find(`name`, "Verified User");
    if (!verifyrole) return message.reply('❗️ You have to Creat a roll and name it **Verified User**').then(m => m.delete(5000));
        // Check if a user has been mentioned.
    if (!toverify) return message.reply("You need to mention a user.").then(m => m.delete(10000));
    if (toverify.roles.exists(`name`, "Verified User")) return message.reply('❌ This User is already verified').then(m => m.delete(5000));
    // Add the role to the user if one is mentioned.
    await (toverify.addRole(verifyrole.id));

    // Find the 'Need - Verification Role' , then remove it.
    let delrole = message.guild.roles.find(`name`, "Need Verification");
    await (toverify.removeRole(delrole.id));

    let vUser = message.guild.member(message.mentions.users.first());
    if (!vUser) return errors.cantfindUser(message.channel);

    let verifembed = new Discord.RichEmbed()
        .setTitle("Verified Users - Logs")
        .setColor('#a5f23a')
        .addField("Verified by", `${message.author.tag}`, true)
        .addField("Channel", message.channel, true)
        .addField("Verified User", `${vUser}`, true)
        .setTimestamp();
    
    let veriflog = message.guild.channels.find(`name`, "log_channel");
    if (!veriflog) return message.channel.send('❌ Could not find the `Verification User Log Channel.` \nCreat One and name it `log_channel`.');
   
    message.delete().catch(O_o=>{});
    message.channel.send(`☑ **${toverify}** **Successfully Verified**`).then(m => m.delete(15000));
    
    
    veriflog.send(verifembed);
    
}
