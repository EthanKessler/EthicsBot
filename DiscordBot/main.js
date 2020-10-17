const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '.';

const fs = require('fs');

//These are for the video selection system... idk man
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
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

//Adding all the commands
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'invite'){
        client.commands.get('invite').execute(message, args);
    }
    if(command === 'video'){
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
    }
    if(command === 'donate'){
        client.commands.get('donate').execute(message, args);
    }
    if(command === 'mystery'){
        client.commands.get('mystery').execute(message, args);
    }
    if(command === 'wiki' || command === 'wikipedia' || command === 'search'){
        var SearchTerm = args[0];

        var Wiki = "https://en.wikipedia.org/wiki/";
        var Output = Wiki.concat(SearchTerm);
        
        

        message.author.send(`Definition: ${Output}`);

        //client.command.get('search').execute(message, SearchTerm); <-- THIS STILL ISNT FUCKING WORKING - TIME TO REWORK
    }
    if(command === 'quote' || command === 'quotes'){
        client.commands.get('quote').execute(message, args);
    }
    if(command === 'find'){
        //client.commands.get('find').execute(message, args);

        message.channel.send("Command is executing");
        const subs = fs.readdirSync('./subs/').filter(file => file.endsWith('.vtt'));
        for(const subfile of subs){
            message.channel.send(`loop is working: ${subfile}`);
            var filetext = fs.readFileSync(`./subs/${subfile}`, 'utf8');
            
            message.channel.send(`${subs.indexOf(subfile)} out of ${subs.length}`);
            if(filetext.length > 0){
                message.channel.send("I can read this file");
            }
        };
    };



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