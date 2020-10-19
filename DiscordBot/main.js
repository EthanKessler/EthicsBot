const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '+';

const fs = require('fs');

const CoolDown = [];
const TopicCool = "TopicCoolDown";

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
    if(!message.content.startsWith(prefix) || message.author.bot || message.author.id !== "527872052716371999") return; //Must remove 3rd argument

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

//Adding all the commands
    if(command === 'ping' && message.channel.id === '766392101633523765'){
        client.commands.get('ping').execute(message, args);
    };
    if(command === 'invite' && message.channel.id === '766392101633523765'){
        client.commands.get('invite').execute(message, args);
    };
    if(command === 'video' && message.channel.id === '766392101633523765'){
        // if(!args.length){
        //     return message.channel.send(`Err: This command requires an argument!`)
        // }

        // message.channel.send(`Arguments: ${args[0]}`);

        //Set description
        const VideoSelect = `1️⃣ ${VideoDict[0]} \n`
                            + `2️⃣ ${VideoDict[1]} \n`
                            + `3️⃣ ${VideoDict[2]} \n`
                            + `4️⃣ ${VideoDict[3]} \n`
                            + `5️⃣ ${VideoDict[4]} \n`;

        let embed = new Discord.MessageEmbed()
        .setTitle('Videos')
        .setDescription(VideoSelect)
        .setColor('GREEN')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('1️⃣')
        msgEmbed.react('2️⃣')
        msgEmbed.react('3️⃣')
        msgEmbed.react('4️⃣')
        msgEmbed.react('5️⃣')


        //From here on should be in the isolated file
        // const VideoDict = ['orange', 'correct', 'rememberer', 'moon', 'ants'];
        // const VideoDef = ['https://www.youtube.com/watch?v=WX0xWJpr0FY&t=1s', 'https://www.youtube.com/watch?v=DJiGuFCzaFo&t=280s', 'https://www.youtube.com/watch?v=hS_AXRRnIzM', 'https://www.youtube.com/watch?v=K3X2Fv-c3Fc', 'https://www.youtube.com/watch?v=Et6itTuJSYY'];

        // if(!VideoDict.includes(args[0])){
        //     return message.author.send(`Woah there! that video isn't in my collection right now. Try: ${Arrays.toString(VideoDict)}`)
        // }
        // var Index = VideoDict.indexOf(args[0]);
        // var Output = VideoDef[Index];

        // message.author.send(`Video: ${Output}`); //Cant get it to work in the fucking file
        //client.commands.get('videos').execute(message, args, VideoDict, VideoDef);
    };
    if(command === 'donate' && message.channel.id === '766392101633523765'){
        client.commands.get('donate').execute(message, args);
    };
    if(command === 'mystery' && message.channel.id === '766392101633523765'){
        client.commands.get('mystery').execute(message, args);
    };
    if(command === 'define'){
        var SearchTerm = args[0];

        var Wiki = "https://en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);
        
        

        message.author.send(`Definition: ${Output}`);

        //client.command.get('search').execute(message, SearchTerm); <-- THIS STILL ISNT FUCKING WORKING - TIME TO REWORK
    };
    if(command === 'quote' || command === 'quotes' && message.channel.id === '766392101633523765'){
        client.commands.get('quote').execute(message, args);
    };
    if(command === 'find' && message.channel.id === '766392101633523765'){
        //client.commands.get('find').execute(message, args);
        const FoundFields = [];
        message.channel.send("[BETA] Your request is being processed. Due to the plethora of high calibre content produced over the past few years, the request may take up to 5 minutes to complete. Maybe enjoy a cup of coffee.");
        const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));
        for(const subfile of subs){
            //message.channel.send(`loop is working: ${subfile}`);
            var filetext = fs.readFileSync(`./subs/${subfile}`, 'utf8');
            Finaltext = filetext.toLowerCase();
            var Keyword = args[0].toLowerCase();
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
        message.author.send(`Now to make the embed with: ${FoundFields}`);

        //Lets make it an embed
        let FoundEmbed = new Discord.MessageEmbed()
        .setTitle('I found videos!')
        .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
        .setDescription(`Relevant videos to keyword (${args[0]})`)
        .addFields(FoundFields)
        .setColor('GREEN');
        let FoundmsgEmbed = await message.author.send(FoundEmbed);
    };
    if(command === 'yt' || command === 'youtube' && message.channel.id === '766392101633523765'){
        client.commands.get('youtube').execute(message, args);
    };
    if(command === 'help' && message.channel.id === '766392101633523765'){
        let Helpembed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setURL('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg')
        .addFields(
            { name: '.help', value: 'Displays a list of possible commands'},
            { name: '.invite', value: 'Sends an invite link for the server'},
            { name: '.mystery', value: 'Sends a mystery link'},
            { name: '.define (+ Search term)', value: 'Defines the word provided. (For example: .define Charles_Darwin)'},
            { name: '.ping', value: 'pong'},
            { name: '.video', value: 'Displays a list of the 5 most recent videos'},
            { name: '.donate', value: 'Sends a link to the Exurb1a patreon'},
            { name: '.yt', value: 'Sends a link to the Exurb1a channel'},
            { name: '.find (+ Search term)', value: 'Searches Exurb1a videos for the search term. Ever wondered where that quote is from?'},
            { name: '.quote', value: 'Sends a link to a library of quotes'},
            { name: '.topic', value: 'Sends a channel specific discussion topic'}
        )
        .setColor('GREEN')
        //.setImage(['./Assets/exurb1a.jpg'])
        .setTimestamp()
        .setAuthor('EthanKessler', null, 'https://ethankessler.itch.io/')
        let HelpmsgEmbed = await message.author.send(Helpembed)
        HelpmsgEmbed.delete({ timeout: 60000});
    }
    if(command === 'topic'){

        if(CoolDown.includes(TopicCool)){
            message.channel.send("Wait 1 minute before attempting to use this command again!");
        } else {
            var TopicOut = client.commands.get('topic').execute(message, args, message.channel.id);
            message.channel.send(TopicOut);
            
            CoolDown.push(TopicCool);
            //message.channel.send("Command Executed");
            setTimeout(() => {
                //Removes the cooldown after 1 minute
                var CoolIndex = CoolDown.indexOf(TopicCool)
                CoolDown.splice(CoolIndex, 1);
            }, 60000);
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
        if(message.author.id !== '527872052716371999') return;

        var activity = args.join(" ");
        client.user.setActivity(activity);
    };
//Uptime
    if(command === 'uptime'){
        if(message.author.id !== '527872052716371999') return;

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
});

client.on("messageReactionAdd", async (reaction, user) =>{
    if (reaction.message.partial) await reaction.message.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "766392101633523765"){
        if (reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).send(`Video: ${VideoDef[0]}`) 
            reaction.message.delete();
        }
        if (reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).send(`Video: ${VideoDef[1]}`)
            reaction.message.delete(); 
        }
        if (reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).send(`Video: ${VideoDef[2]}`)
            reaction.message.delete();
        }
        if (reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).send(`Video: ${VideoDef[3]}`) 
            reaction.message.delete();
        }
        if (reaction.emoji.name === '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).send(`Video: ${VideoDef[4]}`) 
            reaction.message.delete();
        }
    }
})

client.login(process.env.token);