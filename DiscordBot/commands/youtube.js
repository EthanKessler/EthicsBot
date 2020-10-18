module.exports = {
    name: 'youtube',
    description: "sends link to youtube channel",

    //Temp solution
    Output: 'https://www.youtube.com/user/willunicycleforfood',

    execute(message, args){

        message.author.send(this.Output);
    }
}