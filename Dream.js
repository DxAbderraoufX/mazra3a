const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


console.log("Scrpit By Dream");

client.on('ready', () => {
  console.log(`Online !`);
 
});

//Bot 1//
client.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@432118998688202763> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
  else  if (command ==="<@432118998688202763> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
  else if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
   else if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });
  
//Bot 2//
client2.on('message', message => {
  if(message.author.id !== "510806679898554370" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "<@450368110562902068> gc") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@510806679898554370> ${credits}`);
  }
else  if (command ==="<@450368110562902068> say") {
    let thingie = args[0]; 
message.channel.send(`${thingie}`);
    }
 else if (command ==="Check Credits")  {
    message.channel.send('#credits')
 }
 else if (command === "Collect Dailies")  {
    message.channel.send('#daily')
 }
});

//Bot 3//
client3.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@392649204171800577> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
  else   if (command ==="<@392649204171800577> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
  else  if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    else if (command === "Collect Dailies")  {
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


 
client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);

// لا تغير فيها شيء

