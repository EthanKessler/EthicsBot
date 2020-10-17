const fs = require('fs');
const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));

module.exports = {
    name: 'find',
    description: "find Exurb1a quotes",


    execute(message, quote){

        subs.array.forEach(file => {
            if(fs.readFile(file).includes("hello")){
                var Output = file;
            }
        });

        // var Wiki = "en.wikipedia.org/wiki/";
        // var Output = Wiki.concat(SearchTerm);
        

        message.author.send(Output);
    }
}