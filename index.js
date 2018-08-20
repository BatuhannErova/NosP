const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT KULLANIMA HAZIR ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  





  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'S.a') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'sA') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamün Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SelamünAleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SelamunAleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selam') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'selam') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Nasılsınız') {
    msg.reply('İyiyiz Sen Nasılsın');
  }
  if (msg.content === 'Eyw Bot Kardeş') {
    msg.reply('Eyw Canım <3');
  }
  if (msg.content === 'Oyun Oynamak İsteyen Varmı?') {
    msg.reply('Ben İsterdim Ama Sadece Bir Botum');
  }
  if (msg.content === 'sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Bot Naber') {
    msg.reply('İyidir Çalışıyoruz Sen');
  }
  if (msg.content === 'Bende İyi') {
    msg.reply('Allah İyilik Versin Kardeşim <3');
  }
  
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Ping Değeriniz! **' + client.ping + '** ms');
  }
});

client.login(process.env.BOT_TOKEN);
