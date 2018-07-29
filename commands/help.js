exports.run = async(bot, message, args) => {
    
if (!args[0]) {
            message.channel.send("The Help Command is WIP.")
            return;
}

    if (args[0] === "test") {
    
    message.channel.send("test 1");
    }
}
