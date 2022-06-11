const Djs = require('discord.js');

module.exports = {
    name: "lisence",
    aliases: ["li"],
    category: "info",
    description: "show license of Kanata",
    run: async (client, message, args) => {
let embed = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Kanata License")
      .setDescription(`MIT License
Copyright (c) 2022 Kanata NextGen
`)
      .setFooter(`© RZ Group 2022`);             
     message.channel.send(embed);
    }
}