const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Watch Waquante on YT");
});

bot.login(process.env.TOKEN); 
 
bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

bot.on('message', msg => {
  if (msg.content === 'yo') {
    msg.reply('Bonjour!');
  }
});

bot.on('message', msg => {
  if (msg.content === 't moche') {
    msg.reply('fuck');
  }
});

bot.on('message', msg => {
  if (msg.content === 'T moche') {
    msg.reply('fuck');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Yo') {
    msg.reply('Bonjour!');
  }
});

bot.on('message', msg => {
    if (msg.content === 'bonjour') {
    msg.reply('Yo!');
    }
});

bot.on('message', msg => {
  if (msg.content === 'Bonjour') {
  msg.reply('Yo!');
  }
});
bot.on('message', msg => {
    if (msg.content === 'switch') {
    msg.reply('Vive la PS4!');
    }
});

bot.on('message', msg => {
    if (msg.content === prefix +'help') {
    msg.channel.send ("Liste des commandes: \n -*help")
  }
});

bot.on('message', msg => {
    if (msg.content === prefix +'code créateur') {
    msg.channel.send ("WAQUANTE_YT")
  }
});

bot.on('message', msg => {
    if (msg.content === prefix +'code createur') {
    msg.channel.send ("WAQUANTE_YT")
  }
});
