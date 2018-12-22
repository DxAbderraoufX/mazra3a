const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();


console.log("Scrpit By Dream");

client.on('ready', () => {
  console.log(`----------------`);
  console.log(`Credit Farmm - Script By : Vechx `);
  console.log(`----------------`);
  console.log(`Loadinng`);
  console.log(`Loadinng.`);
  console.log(`Loadinng..`);
  console.log(`Loadinng...`);
  console.log(`This Bots Online ' `);
 console.log(`----------------`);


});

//Bot 1//
client.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@"+client.id+"> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@"+client.id+">say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });
  
//Bot 2//
client2.on('message', message => {
  if(message.author.id !== "510806679898554370" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "<@"+client2.id+"> gc") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@510806679898554370> ${credits}`);
  }
  if (command ==="<@"+client2.id+">say") {
    let thingie = args[0]; 
message.channel.send(`${thingie}`);
    }
 if (command ==="Check Credits")  {
    message.channel.send('#credits')
 }
  if (command === "Collect Dailies")  {
    message.channel.send('#daily')
 }
});
//Bot 3//
client3.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@"+client3.id+"> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@"+client3.id+">say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });
 


client.on('message', message => {
 
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client.channels.get("526013604919640065").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
      
        
      }
    }
    
});
client2.on('message', message => {
   // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client2.channels.get("526013604919640065").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
        
      }
    }
    
});
client3.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client3.channels.get("526013675732205579").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });
client4.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client4.channels.get("526013675732205579").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });

 
client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);
// لا تغير فيها شيء

var http = require("http");
setInterval(function() {
    http.get("http://mazra3a.herokuapp.com");
}, 300000); // every 5 minutes (300000)


var http = require("http");
setInterval(function() {
    http.get("http://mazra3a-2.herokuapp.com");
}, 300000); // every 5 minutes (300000)
