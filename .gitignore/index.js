const Discord = require("discord.js");
const bot = new Discord.Client();
const YTDL = require("ytdl-core")

const streamOptions = { seek : 0, volume : 1}
/*const mazette = YTDL('https://www.youtube.com/watch?v=2NulSIo19D0', {filter : 'audioonly'});*/
const mazette = YTDL('https://www.youtube.com/watch?v=9_Ny2lU6zUg', {filter : 'audioonly'});
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

            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join().then(function(connection)
                {
                    connection.playStream(mazette, streamOptions);
                });
            }
            break;
        case BOTCMD+"stop":        
            message.channel.send("STOP");
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;
        default:
            break;
    }

    

})


bot.login(process.env.TOKEN)




        
