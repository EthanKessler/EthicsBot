module.exports = {
    name: 'donate',
    description: "send donation",

    //Temp solution
    Output: 'https://www.patreon.com/exurb1r',

    execute(message, args){

        message.author.send(this.Output);
    }
}