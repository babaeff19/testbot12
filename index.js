const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODQyMDI0ODE5ODU5MjU5NDY1.YJvSuQ.5k4KD61Y3IbPp1J5oIqkHC3wQZE');