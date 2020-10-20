module.exports = {
    name: 'send',
    description: "Send a message",

    execute(message, args, client){

        var argsCopy = args;

        var channelToSendIn = argsCopy.splice(0, 1)
        var MessageToSend = argsCopy.join(" ");

        
        var TheChannel = client.channels.cache.get(channelToSendIn);
        TheChannel.send(MessageToSend);
    }
}