module.exports = {
    name: 'search',
    description: "Search for something",


    execute(message, SearchTerm){

        var Wiki = "en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);
        

        message.author.send(Output);
    }
}