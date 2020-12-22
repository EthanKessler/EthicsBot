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
const Whitelist = ['776852904983396412', '208428556106072064', '256131859950338054', '689966022534627398'];
const Owner = '776852904983396412'
var CommandsAnswered = 0;
var Waittime = (Math.random() * (14400000 - 3600000));

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

//    if(message.channel.id === "674332038182207578"){

//        if(CheckMessage.includes("imposter")){
//            message.react("767523653586780165")
//        };
//        if(CheckMessage.includes("uwu") || CheckMessage.includes("owo")){
//            message.react("766290436238082088")
//        };
//        if(message.content.toLowerCase() === "fuck you dyno"){
//            message.react("757661899792842902")
//        };

//        var HappyTurt = Math.floor(Math.random() * 1001);
//        if (HappyTurt === Math.floor(Math.random() * 1001)){
//          message.react("747181139009077338")
//        };
//    };

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
    if(command === 'donate' && message.channel.id === '674356809485516803'){
        client.commands.get('donate').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'mystery' && message.channel.id === '674356809485516803'){
        client.commands.get('mystery').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'define'){
        var SearchTerm = args[0];

        var Wiki = "https://en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);



        message.author.send(`Definition: ${Output}`);
        message.delete();
        UpdateCommandsAnswered(message);
        //client.command.get('search').execute(message, SearchTerm); <-- THIS STILL ISNT FUCKING WORKING - TIME TO REWORK
        //oh honey don't get upset, you'll get it working! <3
    };
    if(command === 'quote' || command === 'quotes' && message.channel.id === '674356809485516803'){
        client.commands.get('quote').execute(message, args);
        UpdateCommandsAnswered(message);
    };
    if(command === 'find' && (message.channel.id === '674356809485516803' || message.channel.id === "674332087784046614")){
        //client.commands.get('find').execute(message, args);
        const FoundFields = [];
        message.channel.send("[BETA] Your request is being processed. Due to the plethora of high calibre content produced over the past few years, the request may take up to 5 minutes to complete. Maybe enjoy a cup of coffee or tea.");
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
            message.channel.send("AAAAAAAAAAH SOMETHING WENT HORRIBLY WRONG");
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
            { name: '+quote', value: 'Sends a link to a library of quotes.'}
            { name: '+suggest <question>', value: 'Send a topic suggestion to the developer!'}
        )
        .setColor('GREEN')
        //.setImage(['./Assets/exurb1a.jpg'])
        .setTimestamp()
        .setAuthor('EthanKessler', null, 'https://ethankessler.itch.io/')
        try {
            let HelpmsgEmbed = await message.author.send(Helpembed)
        } catch (error) {
            message.channel.send("Uh oh, something went wrong.");
            return;
        }
        // let HelpmsgEmbed = await message.author.send(Helpembed)
        //HelpmsgEmbed.delete({ timeout: 60000});
        UpdateCommandsAnswered(message);
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
        //There ye go//   //lmao I love you//
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
            client.users.cache.get('689966022534627398').send(suggestion);
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
        "Where did I leave my knife?", "I hope no one saw that...", "Why?", "Who am I?", "Where's all the milk?", "Fuck you Dyno...", "This universe is as mad as a bucket of coked up ferrets...", "The suspect has his head placed upon a block, and an axe aimed at his neck. If the man is guilty, the axe will bounce off his neck — so we burn him. If the man is not guilty, the axe will simply slice his head off.", "Field Marshal Haig is about to make yet another gargantuan effort to move his drinks cabinet six inches closer to Berlin.", "What's the story morning glory?", "There hasn’t been a war run this badly since Olaf the hairy, King of all the Vikings, ordered 80,000 battle helmets with the horns on the inside.", "Cogito ergo sum... *mutters: 'posh [Redacted]'*", "Eternity in the company of Beelzebub and all his hellish instruments of death will be a picnic compared to five minutes with me – and this pencil.", "The path of my life is strewn with cowpats from the Devil’s own satanic herd.", "When I want your advice, I’ll give you the special signal. Which is me being sectioned under the Mental Health Act.", "I’d love to stay and chat, but honestly, I’d rather have Type 2 diabetes.", "NOMFuP. N-O-M-F-P. Not My Fucking Problem. I quite like that. Do you like that? I’ll use that quite a lot today.", "Hello and, again, welcome to the Aperture Science computer-aided enrichment center.", "Killing you and giving you good advice aren't mutually exclusive.", "Well done, monkey. Remember that monkey hell is a real place where you will be sent at the first sign of resistance.", "We at the Ethan Kessler game labs would like to remind you that the Companion Tortoise will never threaten to stab you, and in fact, cannot speak.", "All right, I've been thinking. When life gives you lemons? Don't make lemonade. Make life take the lemons back! Get mad!", "I don't want your damn lemons! What am I supposed to do with these?!", " Do you know who I am?! I'm the man who's gonna burn your house down! With the lemons!", "I'm gonna get my engineers to invent a combustible lemon that burns your house down!", "Living is easy with eyes closed, misunderstanding all you see...", "Studies have shown that an ant can carry one hundred times its own weight, but there is no known limit to the lifting power of the average tiny eighty-year-old Spanish peasant grandmother.", "It's not that I don't want to die... I mean, I've always... it's just that life is kind of a habit that's hard to break...", "It was amazing how many friends you could make by being bad at things, provided you were bad enough to be funny.", "NO, YOU CAN'T RIDE A CAT. WHO EVER HEARD OF THE DEATH OF RATS RIDING A CAT? THE DEATH OF RATS WOULD RIDE SOME KIND OF DOG.", "Wizards don't believe in gods in the same way that most people don't find it necessary to believe in, say, tables.", "I am not a vegetarian because I love animals; I am a vegetarian because I hate plants.", "I dislike all of you... except my owner... he's ok. And maybe Ash, but just barely.", "For the last time Exurb1a i'm not a fucking coaster.", "Go read a book you doinks", "@ me and face the wrath of... well, an angry tortoise", "My cousin goes around with all these elephants on his back... its very *impratchetal*", "You're cute. Albeit by tortoise standards...", "Go listen to some good music... none of that Exurb1a crap (I'm joking master please not the tea cup again)", "For the last time Layla, I don't know where I left his body-- oh, hi Mark", "I like your funny words magic man!", "Nothing bad ever happens to the Kennedys", "Chat is running about as smooth as a soviet submarine", "I'll feed your kidneys to a siberian mountain goat", "I've been on my back for about a week now and Exurb1a hasn't noticed...", "I think he's gone...", "I miss WIT", "Exurb1a you lazy sod, talk here more often.", "Exurb1a found my meth lab...", "*pats Exurb1a* there are many like it but this one is mine" ];
    var quoteToUse = RandomMessages[Math.floor(Math.random() * RandomMessages.length)];
    ChannelToSendIn.send(quoteToUse)
};

client.login(process.env.token);
