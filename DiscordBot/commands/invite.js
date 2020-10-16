module.exports = {
    name: 'invite',
    description: "send invite link",

    //Temp solution
    Output: 'https://discord.gg/Z8SmX5C',

    execute(message, args){

        message.author.send(this.Output);
    }
}