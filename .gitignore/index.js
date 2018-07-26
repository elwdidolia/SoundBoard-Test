const Discord = require("discord.js");
const bot = new Discord.Client();
const YTDL = require("ytdl-core")

const streamOptions = { seek : 0, volume : 1}
const mazette = YTDL('https://youtu.be/9_Ny2lU6zUg', {filter : 'audioonly'});
const BOTCMD = "!";

bot.on('ready', function()
{
    console.log("Ca marche!");
});
bot.on('message', message =>{
    switch(message.content)
    {
        case BOTCMD+"Reydak" : 
            console.log("ReydaRk");
            message.channel.send("Animateur et streamer professionnel !")
            break;
        case BOTCMD+"Mazette":
            if(!message.member.voiceChannel){
                message.channel.send("Vous devez être dans un salon vocal pour éxécuter cette commande.")
                return;
            }

           if(message.member.voiceChannel){
               message.channel.send("condition validée");
                
                const channel = message.member.voiceChannel;

                channel.join()
                .then(connection => console.log('Connected!'))
                .catch(console.error);
               return;
           }
            break;
        case "stop":
            var server = servers[message.guild.id];
            
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        default:
            break;
    }

    

})

bot.login(process.env.TOKEN)




        
