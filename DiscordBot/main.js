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

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//Adding all the commands
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    // if(command === 'yt' || command === 'youtube'){
    //     message.channel.send('https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg');
    // } TEMP



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

        client.user.setActivity("“Hell isn't a fire pit but a museum of regrets.”");
    }
});

client.login(process.env.token);