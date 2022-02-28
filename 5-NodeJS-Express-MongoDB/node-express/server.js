const express = require('express'); 
const morgan = require('morgan'); 
const campsiteRouter = require('./routes/campsiteRouter'); 
const promotionRouter = require('./routes/promotionRouter'); 
const partnerRouter = require('./routes/partnerRouter'); 
const hostname = 'localhost'; 
const port = 3000; 

const app = express(); //returns express server application through this variable
app.use(morgan('dev')); 
app.use(express.json()); //when server recieves requires with json, it parses into javascript properties into javascript objects

app.use('/campsites', campsiteRouter); 
app.use('/promotions', promotionRouter); 
app.use('/partners', partnerRouter); 

// allows us to store what the client sends after the slash as a route parameter named campsiteID


app.use(express.static(__dirname + '/public')); 

app.use((req,res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html'); 
    res.end('<html><body><h1>This is an Express Server</h1></body></html>'); 
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
});