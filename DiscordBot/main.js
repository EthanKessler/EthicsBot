const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

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

        let embed = new Discord.MessageEmbed()
        .setTitle('Videos')
        .setDescription('React to select a video')
        .setColor('GREEN')
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react('1️⃣', '2️⃣')

        //From here on should be in the isolated file
        const VideoDict = ['orange', 'correct', 'rememberer', 'moon', 'ants'];
        const VideoDef = ['https://www.youtube.com/watch?v=WX0xWJpr0FY&t=1s', 'https://www.youtube.com/watch?v=DJiGuFCzaFo&t=280s', 'https://www.youtube.com/watch?v=hS_AXRRnIzM', 'https://www.youtube.com/watch?v=K3X2Fv-c3Fc', 'https://www.youtube.com/watch?v=Et6itTuJSYY'];

        // if(!VideoDict.includes(args[0])){
        //     return message.author.send(`Woah there! that video isn't in my collection right now. Try: ${Arrays.toString(VideoDict)}`)
        // }
        // var Index = VideoDict.indexOf(args[0]);
        // var Output = VideoDef[Index];

        // message.author.send(`Video: ${Output}`); //Cant get it to work in the fucking file
        //client.commands.get('videos').execute(message, args, VideoDict, VideoDef);
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

        String(args);
        client.user.setActivity(args);
    }
});

client.login(process.env.token);