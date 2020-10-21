module.exports = {
    name: 'mystery',
    description: "send mystery link",

    execute(message, args){

        var items = Array("http://eelslap.com/", "https://thatsthefinger.com/", "http://endless.horse/",
                        "http://corndog.io/", "https://cant-not-tweet-this.com/", "http://www.koalastothemax.com/",
                        "https://alwaysjudgeabookbyitscover.com/", "https://chrismckenzie.com/", "https://thezen.zone/",
                        "https://jacksonpollock.org/", "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
                        "http://drawing.garden/", "https://pointerpointer.com/", "http://lacquerlacquer.com/",
                        "https://strobe.cool/", "http://www.patience-is-a-virtue.org/", "http://onemillionlols.com/",
                        "http://tencents.info/", "http://www.ismycomputeron.com/", "http://chihuahuaspin.com/",
                        "https://www.ascii-middle-finger.com/", "http://www.donothingfor2minutes.com/", "http://spaceis.cool/",
                        "https://existentialcrisis.com/", "http://www.amialright.com/", "https://www.bouncingdvdlogo.com/", "http://notdayoftheweek.com/",
                        "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/", "https://www.youtube.com/watch?v=RcAGFgPCigw&list=RDRcAGFgPCigw",
                        "https://www.youtube.com/watch?v=O2deXwf4drE&list=RDRcAGFgPCigw", "https://www.youtube.com/watch?v=UwxatzcYf9Q&list=RDRcAGFgPCigw",
                        "http://wikiroulette.co");
        var Output = items[Math.floor(Math.random() * items.length)]

        message.author.send(Output);
    }
}