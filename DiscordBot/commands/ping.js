module.exports = {
    name: 'ping',
    description: "ping pong?",

    //Temp solution
    Output: 'pong!',

    execute(message, args){

        message.channel.send(this.Output);
    }
}