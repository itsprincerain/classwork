// Require modules
const express = require('express');
const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// Create the app
const app = express();




// Mount routes


//greetings
app.get('/greeting/:name', function(req, res) {
  	res.send('HEllo' + req.params.name);
   
});

//Tip calculator
app.get('/tip/:total/:tip', function(req, res) {
  console.log(req.params)
  res.send(`${req.params.total * req.params.tip/100}`);
 
});

//Magic 8 ball
app.get('/magic/:question', function(req, res) {
  
  res.send(`${req.params.question.split("%20")}?<h1>${array[Math.floor(Math.random()*array.length)]}</h1>`);

 
});













// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});