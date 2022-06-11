const { token } = require("./config.json");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const chalk = require('chalk');
const { join } = require("path");
const { addexp } = require("./handlers/xp.js");
const { TOKEN, default_prefix } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});


client.commands = new discord.Collection();
client.prefix = default_prefix;
client.queue = new Map();
client.aliases = new discord.Collection();
const cooldowns = new Collection();

//--------MUSIC - CLIENT------//
const { Player } = require('discord-player');
const fs = require("fs")
client.player = new Player(client);
	
//-------brainshop-------//
client.db = require('quick.db');
client.brain = require('./util/chatSend');
client.em = require("./util/embed")


//Client Events 2 

client.on("ready", () => {
  client.user.setStatus("idle"); // You Can Set It To dnd, online, idle. dont set it to offline plz  
});

//---------Here To Set The Activity Status---------\\
client.on("ready", async () => {
  console.log(`Welcome to ${client.user.username} // By https://github.com/Rimba5446 // Discord: Kanata#0370`)
  const status = [
    `Guilds : ${await client.guilds.cache.size} | r/help | r/about | r/invite |`
  ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], { type: "PLAYING" }) //You Can Set The Type To PLAYING/WATCHING/COMPETING/LISTENING.
  }, 3000)
});
client.on("ready", async () => {
  const status = [
    `https://kanata.crystalcloud.xyz/`
  ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], { type: "WATCHING" }) //You Can Set The Type To PLAYING/WATCHING/COMPETING/LISTENING.
  }, 3000)
});

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
    //console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
  };

//after command.run

client.login(TOKEN);