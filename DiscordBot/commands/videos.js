

module.exports = {
    //Setting up dictionary
    Dict: ['orange', 'correct', 'rememberer', 'moon', 'ants'],
    Def: ['https://www.youtube.com/watch?v=WX0xWJpr0FY&t=1s', 'https://www.youtube.com/watch?v=DJiGuFCzaFo&t=280s', 'https://www.youtube.com/watch?v=hS_AXRRnIzM', 'https://www.youtube.com/watch?v=K3X2Fv-c3Fc', 'https://www.youtube.com/watch?v=Et6itTuJSYY'],
    Index: 0,



    name: 'video',
    description: "display link",

    execute(message, args){
        
        if(!this.Dict.includes(args[0])) return;
        //Now allocate the fucking thing
        var Index = this.Dict.indexOf(args[0])

        message.author.send(`Video: ${Def[Index]}`);
    }
}
