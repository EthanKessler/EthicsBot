module.exports = {
    name: 'quote',
    description: "sends link to quotes",

    //Temp solution
    Output: 'https://www.goodreads.com/quotes/search?',

    execute(message, args){

        message.author.send(this.Output);
    }
}