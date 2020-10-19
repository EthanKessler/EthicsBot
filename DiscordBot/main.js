const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '+';

const fs = require('fs');

const CoolDown = [];
var AllowAccess = false;
const Whitelist = ['527872052716371999', '656960915853279247'];

//These are for the video selection system... idk man REWORK
const VideoDict = ["There's No Such Thing As Orange", 'How to Be Correct About Everything All the Time', 'The Rememberer', 'The Moon is a Door to Forever', 'The Ants'];
const VideoDef = ['https://www.youtube.com/watch?v=WX0xWJpr0FY&t=1s', 'https://www.youtube.com/watch?v=DJiGuFCzaFo&t=280s', 'https://www.youtube.com/watch?v=hS_AXRRnIzM', 'https://www.youtube.com/watch?v=K3X2Fv-c3Fc', 'https://www.youtube.com/watch?v=Et6itTuJSYY'];
//End of random shit

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
    // var SplitMessage = message.toString().toLowerCase().split(" ");
    // if(SplitMessage.includes("fuck") || SplitMessage.includes("fucking") || SplitMessage.includes("shit") || SplitMessage.includes("cunt")){
    //     message.react("757661899792842902");
    // };
    // if(SplitMessage.includes("@staff")){
    //     message.react("757969401856262287")
    // };

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!(AllowAccess || message.author.id === "527872052716371999")) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


//Adding all the commands
    if(command === 'ping' && message.channel.id === '674356809485516803'){
        client.commands.get('ping').execute(message, args);
    };
    if(command === 'invite' && message.channel.id === '674356809485516803'){
        client.commands.get('invite').execute(message, args);
    };
    if(command === 'donate' && message.channel.id === '674356809485516803'){
        client.commands.get('donate').execute(message, args);
    };
    if(command === 'mystery' && message.channel.id === '674356809485516803'){
        client.commands.get('mystery').execute(message, args);
    };
    if(command === 'define'){
        var SearchTerm = args[0];

        var Wiki = "https://en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);
        
        

        message.author.send(`Definition: ${Output}`);
        message.delete();

        //client.command.get('search').execute(message, SearchTerm); <-- THIS STILL ISNT FUCKING WORKING - TIME TO REWORK
    };
    if(command === 'quote' || command === 'quotes' && message.channel.id === '674356809485516803'){
        client.commands.get('quote').execute(message, args);
    };
    if(command === 'find' && message.channel.id === '674356809485516803'){
        //client.commands.get('find').execute(message, args);
        const FoundFields = [];
        message.channel.send("[BETA] Your request is being processed. Due to the plethora of high calibre content produced over the past few years, the request may take up to 5 minutes to complete. Maybe enjoy a cup of coffee or tea.");
        const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));
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

        //var RelevantOutput = FoundVideos.toString();
        //message.author.send(`Now to make the embed with: ${FoundFields}`);

        //Lets make it an embed
        let FoundEmbed = new Discord.MessageEmbed()
        .setTitle('I found videos!')
        .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
        .setDescription(`Relevant videos to keyword(s) (${Keyword})`)
        .addFields(FoundFields)
        .setColor('GREEN');
        let FoundmsgEmbed = await message.author.send(FoundEmbed);
    };
    if(command === 'yt' || command === 'youtube' && message.channel.id === '674356809485516803'){
        client.commands.get('youtube').execute(message, args);
    };
    if((command === 'help' || command === 'commands') && message.channel.id === '674356809485516803'){
        let Helpembed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
        .addFields(
            { name: '+help', value: 'Displays a list of possible commands'},
            { name: '+invite', value: 'Sends an invite link for the server'},
            { name: '+mystery', value: 'Sends a mystery link'},
            { name: '+define (+ Search term)', value: 'Defines the word provided. (For example: .define Charles_Darwin)'},
            { name: '+ping', value: 'pong'},
            { name: '+donate', value: 'Sends a link to the Exurb1a patreon'},
            { name: '+yt', value: 'Sends a link to the Exurb1a channel'},
            { name: '+find (+ Search term)', value: 'Searches Exurb1a videos for the search term. Ever wondered where that quote is from?'},
            { name: '+quote', value: 'Sends a link to a library of quotes'},
            { name: '+topic', value: 'Sends a channel specific discussion topic'}
        )
        .setColor('GREEN')
        //.setImage(['./Assets/exurb1a.jpg'])
        .setTimestamp()
        .setAuthor('EthanKessler', null, 'https://ethankessler.itch.io/')
        let HelpmsgEmbed = await message.author.send(Helpembed)
        HelpmsgEmbed.delete({ timeout: 60000});
    }
    if(command === 'topic'){
        var TopicCool = message.channel.id;
        if(CoolDown.includes(TopicCool)){
            message.channel.send("Wait 5 minutes before attempting to use this command again!");
        } else {
            client.commands.get('topic').execute(message, args, message.channel.id);
            
            CoolDown.push(TopicCool);
            //message.channel.send("Command Executed");
            setTimeout(() => {
                //Removes the cooldown after 5 minutes
                var CoolIndex = CoolDown.indexOf(TopicCool)
                CoolDown.splice(CoolIndex, 1);
            }, 300000);
        }


    }

////ADMIN ONLY////
//Bot kill switch
    if(command === 'restart'){
        if(message.author.id !== '527872052716371999') return;
        message.channel.send('Goodbye world.').then(() => {
            process.exit(1);
        })
    };
//set bot status
    if(command === 'status'){
        if(!Whitelist.includes(message.author.id)) return;

        var activity = args.join(" ");
        client.user.setActivity(activity);
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

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        //There ye go//
        message.channel.send(uptime)
    }
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
    }
});

client.login(process.env.token);