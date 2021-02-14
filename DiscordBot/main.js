const { timeout } = require('cron');
const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '+';

const fs = require('fs');
//const BotLogs = client.channels.cache.get('767752850561302578');
const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));

const CoolDown = [];
var AllowAccess = true;
var AllowRandomPosts = false;
var Whiteliststring = process.env.access;
var Whitelist = Whiteliststring.split(",")
var Owner = process.env.owner;
var CommandsAnswered = 0;
var Waittime = (Math.random() * (14400000 - 3600000));
var VChannel = "";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}

client.once('ready', () => {
    console.log('Exurb1a bot is online!');
});

client.on('message', async message =>{
    //Reacting to messages
    if(AllowRandomPosts){
        setTimeout(() => {
            SendRandomMessage();
        }, Waittime);
        //RandomCrap(Waittime);
    };
    var CheckMessage = message.content.toLowerCase();

//    if(CheckMessage.includes(("video games channel") || CheckMessage.includes("gaming channel") || CheckMessage.includes("gaming")) && message.channel.id === '705359833380945980'){
//        client.channels.cache.get(`715560637027319808`).send(`@<${message.author.id}> https://discord.com/channels/668213545909092354/715560637027319808/766715396333502495`);
//        message.delete();
//    }

    if(message.channel.id === VChannel){
        var CheckMessage = message.content.toLowerCase();

        if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10))
        {
            message.react("792890351584673832")
        }
        if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10))
        {
            message.react("754162349732134984")
        }
        if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10))
        {
            message.react("807432713849012264")
        }
        var HappyTurt = Math.floor(Math.random() * 1001);
        if (HappyTurt === Math.floor(Math.random() * 1001)){
          message.react("747181139009077338")
        };

        if (message.author.id === "674719244998541353")
        {
            if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10))
            {
                message.react("767223850907336704")
            }
        };
    }
    if(message.channel.id === "674332038182207578"){
        if(CheckMessage.includes("imposter")){
            message.react("767523653586780165")
        };
        if(CheckMessage.includes("uwu") || CheckMessage.includes("owo")){
            message.react("766290436238082088")
        };
        if(CheckMessage.includes("fuck you")){
            message.react("757661899792842902")
        };
        var HappyTurt = Math.floor(Math.random() * 1001);
        if (HappyTurt === Math.floor(Math.random() * 1001)){
          message.react("747181139009077338")
        };

        if (message.author.id === "674719244998541353")
        {
            if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10))
            {
                message.react("767223850907336704")
            }
        };
    
    };

    //More random shit
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!(AllowAccess || Whitelist.includes(message.author.id))) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //UpdateCommandsAnswered();


//Adding all the commands
    if(command === 'ping' && message.channel.id === '674356809485516803'){
        client.commands.get('ping').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    // if(command === 'wit'){
    //     message.channel.send("We'll miss you buddy. So long and thanks for all the fish...")
    //     UpdateCommandsAnswered();
    //}
    if(command === 'invite' && message.channel.id === '674356809485516803'){
        client.commands.get('invite').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'valentine'){
        var CheckMessage = message.content.toLowerCase();
        if(!(CheckMessage.includes(':')))
        {
            var VMessage = args.join(" ");
            try{
                await client.channels.cache.get(VChannel).send("❤ Happy Valentine's Day! " + VMessage);
            } catch (error) {
                print("MAJ YOU FUCKING IDIOT ITS THE ROLES");
            };
            
        };
        UpdateCommandsAnswered(message);
        try{
            message.delete();
        } catch (error) {
            print("fuck")
        };
    }
    if(command === 'donate' && message.channel.id === '674356809485516803'){
        client.commands.get('donate').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'mystery' && message.channel.id === '674356809485516803'){
        client.commands.get('mystery').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(message.channel.id === '702797960861450261'){
        switch(command)
        {
            case "cat":
                client.commands.get('animal').cat(message, args);
                break;
            default:
                break;
        }
        UpdateCommandsAnswered(message);
    };
    if(command === 'define'){
        var SearchTerm = args[0];

        var Wiki = "https://en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);



        message.author.send(`Definition: ${Output}`);
        message.delete();
        UpdateCommandsAnswered(message);
        //client.command.get('search').execute(message, SearchTerm);
    };
    if(command === 'quote' || command === 'quotes' && message.channel.id === '674356809485516803'){
        client.commands.get('quote').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'find' && (message.channel.id === '674356809485516803' || message.channel.id === "674332087784046614")){
        //client.commands.get('find').execute(message, args);
        const FoundFields = [];
        //message.channel.send("[BETA] Your request is being processed. Due to the plethora of high calibre content produced over the past few years, the request may take up to 5 minutes to complete. Maybe enjoy a cup of coffee or tea.");
        // const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));
        for(const subfile of subs){
            //message.channel.send(`loop is working: ${subfile}`);
            var filetext = fs.readFileSync(`./subs/${subfile}`, 'utf8');
            Finaltext = filetext.toLowerCase();
            var Keyword = args.join(" ").toLowerCase();
            var LinkHead = "https://www.youtube.com/watch?v="

            //message.channel.send(`${subs.indexOf(subfile)} out of ${subs.length}`);
            if(Finaltext.includes(Keyword)){
                //message.channel.send("I can read this file");
                var VideoToPush = subfile.split("-");
                var LinkTail = VideoToPush[1].split(".");

                var FoundVideoLink = LinkHead.concat(LinkTail[0]);

                if(VideoToPush[0].length > 0){
                    // FoundFields.push(VideoToPush[0]);
                    // message.channel.send(FoundVideoLink);

                    FoundFields.push({ name: VideoToPush[0], value: FoundVideoLink})
                };
            };
        };
        UpdateCommandsAnswered(message);

        //var RelevantOutput = FoundVideos.toString();
        //message.author.send(`Now to make the embed with: ${FoundFields}`);

        //Lets make it an embed
        let FoundEmbed = new Discord.MessageEmbed()
            .setTitle('I found videos!')
            .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
            .setDescription(`Relevant videos to keyword(s) (${Keyword})`)
            .addFields(FoundFields)
            .setColor('GREEN');
        try {
            let FoundmsgEmbed = await message.author.send(FoundEmbed);
        } catch (error) {
            return;
        };
        try {
            message.delete();
        } catch (error) {
            print("Error")
            return;
        };
    };
    if(command === 'yt' || command === 'youtube' && message.channel.id === '674356809485516803'){
        client.commands.get('youtube').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if((command === 'help' || command === 'commands') && (message.channel.id === '674356809485516803' || message.author.id === Owner)){
        let Helpembed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
        .addFields(
            { name: '+help', value: 'Displays a list of possible commands (good job, you did this already).'},
            { name: '+invite', value: 'Sends an invite link for the server.'},
            { name: '+mystery', value: 'Sends a mystery link!'},
            { name: '+define <word>', value: 'Defines the word provided. Multiple words must be seperated with an underscore. (ex.: `+define Charles_Darwin`)'},
            { name: '+ping', value: 'pong'},
            { name: '+donate', value: 'Sends a link to the Exurb1a patreon.'},
            { name: '+yt', value: 'Sends a link to the Exurb1a channel.'},
            { name: '+find <keyword(s)>', value: 'Searches Exurb1a videos for specifed keyword(s). Ever wondered where that quote is from?'},
            { name: '+quote', value: 'Sends a link to a library of quotes.'},
            { name: '+suggest <question>', value: 'Send a topic suggestion to the developer!'},
            { name: '+creator', value: 'Ever wondered who made me?'},
            { name: '+cat', value: 'Used in the animals channel, sends a cute photo of a cat'}
        )
        .setColor('GREEN')
        //.setImage(['./Assets/exurb1a.jpg'])
        .setTimestamp()
        .setAuthor('EthanKessler', null, 'https://twitter.com/EthanKesslerDev')
        try {
            let HelpmsgEmbed = await message.author.send(Helpembed)
        } catch (error) {
            let HelpmsgEmbed = await message.channel.send(Helpembed)
            return;
        }
        // let HelpmsgEmbed = await message.author.send(Helpembed)
        //HelpmsgEmbed.delete({ timeout: 60000});
        UpdateCommandsAnswered(message);
    }
    if(command === 'creator'){
        try{
            message.author.send("I was made by: https://twitter.com/EthanKesslerDev");
        } catch (error) {
            message.react("❌")
            return;
        };
        try{
            message.delete()
        } catch (error) {
            return;
        }
    }

////ADMIN ONLY////
//Bot kill switch
    if(command === 'restart'){
        if(message.author.id !== Owner) return;
        message.channel.send('Goodbye world.').then(() => {
            process.exit(1);
        })
    };
    if(command === 'commandsanswered' && message.author.id === Owner){
        var NewAnsweredValue = parseInt(args[0]);
        CommandsAnswered = NewAnsweredValue;
        message.channel.send("Values updated, sir!");
        UpdateCommandsAnswered(message);
    }
//set bot status
    if(command === 'status'){
        if(!Whitelist.includes(message.author.id)) return;

        var activity = args.join(" ");
        client.user.setActivity(activity);
        UpdateCommandsAnswered(message);
    };
    if(command === "svc"){
        if(!Whitelist.includes(message.author.id)) return;

        VChannel = args.join("")
        UpdateCommandsAnswered(message);
    }
//Uptime
    if(command === 'uptime'){
        if(!Whitelist.includes(message.author.id)) return;

        //Setting up time//
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `**Uptime:**\n${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
        message.channel.send(uptime)
        //message.delete({ timeout: 10000 });
        UpdateCommandsAnswered(message);
    }
    ////THE MOST IMPORTANT COMMAND////
    if(command === 'allow' || command === 'access'){
        if(!Whitelist.includes(message.author.id)) return;

        if(AllowAccess){
            AllowAccess = false;
            message.channel.send("Access revoked");
        }
        else if(!AllowAccess){
            AllowAccess = true;
            message.channel.send("Access allowed");
        }
        UpdateCommandsAnswered(message);
    }
    if(command === "allowrandom" && Whitelist.includes(message.author.id)){
        if(AllowRandomPosts){
            AllowRandomPosts = false;
            message.channel.send("Random shit gone")
        }
        else if(!AllowRandomPosts){
            AllowRandomPosts = true;
            //message.channel.send("Random shit here")
            var test = client.channels.cache.get('674332038182207578');
            message.channel.send("random shit here");
        }
        UpdateCommandsAnswered(message);
    }
    if(command === "sendrandom" && message.author.id === Owner){
        SendRandomMessage();
        UpdateCommandsAnswered(message);
    }
    if(command === "send" && message.author.id === Owner){
        //client.commands.get('send').execute(message, args, client);
        var argsCopy = args;

        var channelToSendIn = argsCopy.splice(0, 1)
        var MessageToSend = argsCopy.join(" ");


        var TheChannel = client.channels.cache.get(channelToSendIn[0]);
        TheChannel.send(MessageToSend);
    }
    if(command === "stats" && message.author.id === Owner){
        message.channel.send(`Commands replied to: ${CommandsAnswered}`);
    }
    if(command === "logs" && Whitelist.includes(message.author.id)){
        message.author.send("Logs", { files: ["./Assets/log.txt"] });
    }

    if(command === "suggest"){
        var suggestion = args[0];
        if (!suggestion) {
            message.reply("you didn't pose a question!");
            return;
        }

        if (suggestion) {
            client.users.cache.get('776852904983396412').send(suggestion);
            message.reply("your suggestion was sent to the developers!")
        }
    }
});


function UpdateCommandsAnswered(commandAnswered){
    CommandsAnswered += 1;

    // console.log(commandAnswered.content);
    // console.log(commandAnswered.author.id);
    // console.log(commandAnswered);

    var logsOut = `User ID: ${commandAnswered.author.id} \
    Content: ${commandAnswered.content}`

    fs.appendFile('./Assets/log.txt', logsOut, function (err) {
        if(err) throw err;
        console.log('logged');
    });
    // const BotLogs = client.channels.cache.get('767752850561302578');
    //BotLogs.send(`Command answered, current total: ${CommandsAnswered}`);
};

function SendRandomMessage(){
    var ChannelToSendIn = client.channels.cache.get('674332038182207578');
    const RandomMessages = [
        "Where did I leave my knife?", "I hope no one saw that...", "Why?", "Who am I?", "Where's all the milk?", "Fuck you Dyno...", "This universe is as mad as a bucket of coked up ferrets...", "The suspect has his head placed upon a block, and an axe aimed at his neck. If the man is guilty, the axe will bounce off his neck — so we burn him. If the man is not guilty, the axe will simply slice his head off.", "Field Marshal Haig is about to make yet another gargantuan effort to move his drinks cabinet six inches closer to Berlin.", "What's the story morning glory?", "There hasn’t been a war run this badly since Olaf the hairy, King of all the Vikings, ordered 80,000 battle helmets with the horns on the inside.", "Cogito ergo sum... *mutters: 'posh [Redacted]'*", "Eternity in the company of Beelzebub and all his hellish instruments of death will be a picnic compared to five minutes with me – and this pencil.", "The path of my life is strewn with cowpats from the Devil’s own satanic herd.", "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.", "Killing you and giving you good advice aren't mutually exclusive.", "Well done, monkey. Remember that monkey hell is a real place where you will be sent at the first sign of resistance.", "We at the Ethan Kessler game labs would like to remind you that the Companion Tortoise will never threaten to stab you, and in fact, cannot speak.", "All right, I've been thinking. When life gives you lemons? Don't make lemonade. Make life take the lemons back! Get mad!", "I don't want your damn lemons! What am I supposed to do with these?!", " Do you know who I am?! I'm the man who's gonna burn your house down! With the lemons!", "I'm gonna get my engineers to invent a combustible lemon that burns your house down!", "Living is easy with eyes closed, misunderstanding all you see...", "Studies have shown that an ant can carry one hundred times its own weight, but there is no known limit to the lifting power of the average tiny eighty-year-old Spanish peasant grandmother.", "It's not that I don't want to die... I mean, I've always... it's just that life is kind of a habit that's hard to break...", "It was amazing how many friends you could make by being bad at things, provided you were bad enough to be funny.", "NO, YOU CAN'T RIDE A CAT. WHO EVER HEARD OF THE DEATH OF RATS RIDING A CAT? THE DEATH OF RATS WOULD RIDE SOME KIND OF DOG.", "Wizards don't believe in gods in the same way that most people don't find it necessary to believe in, say, tables.", "I am not a vegetarian because I love animals; I am a vegetarian because I hate plants.", "I dislike all of you... except my owner... he's ok. And maybe Ash, but just barely.", "For the last time Exurb1a i'm not a fucking coaster.", "Go read a book you doinks", "@ me and face the wrath of... well, an angry tortoise", "My cousin goes around with all these elephants on his back... its very *impratchetal*", "You're cute. Albeit by tortoise standards...", "Go listen to some good music... none of that Exurb1a crap (I'm joking master please not the tea cup again)", "For the last time Layla, I don't know where I left his body-- oh, hi Mark", "I like your funny words magic man!", "Nothing bad ever happens to the Kennedys", "Chat is running about as smooth as a soviet submarine", "I'll feed your kidneys to a siberian mountain goat", "I've been on my back for about a week now and Exurb1a hasn't noticed...", "I think he's gone...", "I miss WIT", "Exurb1a you lazy sod, talk here more often.", "Exurb1a found my meth lab...", "*pats Exurb1a* there are many like it but this one is mine", 
        "'Good authors too who once knew better words, Now only use four-letter words, Writing prose. Anything Goes.' ~ Cole Porter", "Time is a drug. Too much of it kills you. ~ *TP, Small Gods*", "If you trust in yourself…and believe in your dreams…and follow your star…you’ll still get beaten by people who spent their time working hard and learning things and weren’t so lazy.", "Look, that’s why there’s rules, understand? So that you think before you break ’em. ~ *TP, Thief of Time*", "In the beginning there was nothing, which exploded.", "The entire universe has been neatly divided into things to (a) mate with, (b) eat, (c) run away from, and (d) rocks.", "Give a man a fire and he’s warm for a day, but set fire to him and he’s warm for the rest of his life.", `“I meant,” said Ipslore bitterly, “what is there in this world that truly makes living worthwhile?”
        Death thought about it.
        CATS, he said eventually. CATS ARE NICE.`, "It is said that your life flashes before your eyes just before you die. That is true, it’s called Life.", "He’d been wrong, there was a light at the end of the tunnel, and it was a flamethrower.", "Some humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying ‘End-of-the-World Switch. PLEASE DO NOT TOUCH’, the paint wouldn’t even have time to dry.", "The ships hung in the sky in much the same way that bricks don’t.", `“Space,” it says, “is big. Really big. You just won’t believe how vastly, hugely, mindbogglingly big it is. I mean, you may think it’s a long way down the road to the chemist’s, but that’s just peanuts to space.`, "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.", "The chances of finding out what’s really going on in the universe are so remote, the only thing to do is hang the sense of it and keep yourself occupied.", "Shee, you guys are so unhip it’s a wonder your bums don’t fall off.", `“Forty-two,” said Deep Thought, with infinite majesty and calm.`, "He was staring at the instruments with the air of one who is trying to convert Fahrenheit to centigrade in his head while his house is burning down.", "There is a moment in every dawn when light floats, there is the possibility of magic. Creation holds its breath. ~ *douglas adams*", "There is an art, it says, or rather, a knack to flying. The knack lies in learning how to throw yourself at the ground and miss.", "t is a mistake to think you can solve any major problems just with potatoes.", "***Don’t Panic.***", "Almost all of your ancestors would have given their legs to live for a few hours in the time we live in now. And all you accomplished today was successfully holding in a fart... for a while at least.", "***nothing means anything and we're all going to die...***", "He was a self-made man who owed his lack of success to nobody.", "How about we just make me Mod around here.", "I'll be around after you're all long gone... thats a shame... My species were never really good at winning races.", "What a wonderful, wonderful, confusing, infuriating and shitty world. It'll be difficult sometimes, but look around, breathe if you can, and enjoy what time you have. https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/nas-uploads/sites/4/2015/03/turtle.gif", "<@776852904983396412> DuMbAsS"];
    var quoteToUse = RandomMessages[Math.floor(Math.random() * RandomMessages.length)];
    ChannelToSendIn.send(quoteToUse)
};

client.login(process.env.token);
