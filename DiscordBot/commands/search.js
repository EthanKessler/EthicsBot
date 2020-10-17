module.exports = {
    name: 'search',
    description: "Search for something",


    execute(message, args){

        var Wiki = "en.wikipedia.org/wiki/";
        var Output = Wiki.concat(args[0]);
        

        message.author.send(Output);
    }
}