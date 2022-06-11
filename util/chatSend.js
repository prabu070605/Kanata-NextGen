const axios = require('axios');
const { key } = require("../config.json");
const { bid } = require("../config.json");

require("./inline.js");

const chatSend = async (message) => {
   try {
    let uid = "1"
    let msg = message.content
        message.channel.startTyping()
       await axios.get(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`)
       .then(res => {
       let data = res.data;
      let reply = data.cnt
console.log(reply)
        if (reply) {
            message.channel.stopTyping();
            message.sendInline(reply, { allowedMentions: { repliedUser: false } });
        } else if(!reply) {
        message.channel.stopTyping();
        message.sendInline("api did not respond at time [TIME OUT]", { allowedMentions: { repliedUser: false } });
}
       })
 } catch (e) {
        message.channel.stopTyping();
        console.log(e);
    }
};

module.exports = {
    chatSend
};