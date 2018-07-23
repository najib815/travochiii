
module.exports.run = (bot, message, args) => {

	message.channel.send(`${message.author.username} has died.`).then(message => {
        setTimeout(() => { message.edit("Respawning..."); }, 3000);
        setTimeout(() => { message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 9000);
     });
	
}
