const db = require('quick.db')
const djs = require('discord.js')
const { bid } = require('../../config');
const { key } = require('../../config');
module.exports = {
    name: "chat",
    aliases: ["ch"],
    category: "ai",
    description: "ai chatbot",
    usage: "[ch]",
    run: async (client, message, args) => {
      
      client.brain.chatSend(message)
}
};