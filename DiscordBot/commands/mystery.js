module.exports = {
    name: 'mystery',
    description: "send mystery link",

    execute(message, args){

        var items = Array("http://eelslap.com/", "https://thatsthefinger.com/", "http://endless.horse/",
                        "http://corndog.io/", "https://cant-not-tweet-this.com/", "http://www.koalastothemax.com/",
                        "https://alwaysjudgeabookbyitscover.com/", "https://chrismckenzie.com/", "https://thezen.zone/",
                        "https://jacksonpollock.org/", "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
                        "http://drawing.garden/", "https://pointerpointer.com/", "http://lacquerlacquer.com/",
                        "https://strobe.cool/", "http://www.patience-is-a-virtue.org/")
        var Output = items[Math.floor(Math.random() * items.length)]

        message.author.send(Output);
    }
}