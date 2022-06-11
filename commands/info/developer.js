const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "developer",

  category: "info",
    aliases: ['developers', 'developer'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField(
              "**• Developers**",
              "RaykujanK13, RZ Group"
            )
          
            .addField('Important Links ','**• [Support](https://dsc.gg/rzgroup)**  • **[Website](http://kanata.ezyro.com/)** ** • [Invite Me](https://discord.com/api/oauth2/authorize?client_id=856759240411447316&permissions=8&scope=bot%20applications.commands)**')

            .setTimestamp()
           .setFooter(
           `Kanata NextGen`,
            client.user.displayAvatarURL()  
      ))
         }
};
