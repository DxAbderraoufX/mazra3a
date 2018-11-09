

const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
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


client.on('message', message => {
  if(message.content === '-راتب'){
      message.channel.send('#daily')
  }
});

client.on('message', message => {
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client.on('message', message => {
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});

client2.on('message', message => {
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client2.on('message', message => {
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client2.on('message', message => {
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});
 //bot 3//
 client3.on('message', message => {
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client3.on('message', message => {
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client3.on('message', message => {
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});

//bot 4//

client4.on('message', message => {
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client4.on('message', message => {
  if(message.content === 'Check Credits){
      message.channel.send('#credits')
  }
});

client4.on('message', message => {
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@311830569975676929>')
  }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
      message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
        
      }
    }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
      message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
        
      }
    }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
  if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
  });
client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
    if (message.content === '!spam2') {
        let count = 0;
        let ecount = 0;
        for(let x = 0; x < 90000; x++) {
          message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
            .then(m => {
              count++;
            })
            
          }
        }
    });



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
