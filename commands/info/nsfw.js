const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "nsfw",
  description:
    "Get list commands nsfw",
  usage: "nsfw <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle("**Here are __Nsfw__ commands**")
      .setDescription("**Command Parameters: <k>**")
      .addField(
        "• **NSFW**",
        "```blowjob, ero, eroyuri, feet, femdom, futanari, gasm, girlsologif, hentai, hentaigif, holo, kitsune, pussy, trap, yuri```"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Kanata NextGen`,
      client.user.displayAvatarURL(),
      message.delete()
    );

      message.channel.send(helpEmbed)

  },
};