// require all my modules
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
 
// create my variables
const app = express();
const PORT = process.env.PORT || 3000;

// define my database and middleware
mongoose.connect(process.env.MONGO_URI, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: true
})

mongoose.connection.once('connected', () => console.log('Connected to Mongo Life is Good'))

// list my routes
// INDUCES

// INDEX

app.get('/', (req, res) => {
   res.send(`<h1>99 Bottles of Beer on the Wall</h1>
   <a href="/98">Take one down, pass it around </a>`)

})

app.get('/0', (req, res) => {
   res.send(`<h1>0 Bottles of Beer on the Wall</h1>
   <a href="/">Start the fun all over again . . .</a>`)

})



app.get('/:num', (req, res) => {
   res.send(`<h1>${req.params.num} Bottles of Beer on the Wall</h1>
   <a href="/${req.params.num - 1}">Take one down, pass it around </a>`)

})

// New <----- dont need this

// Delete 

// Update 

// Create

// Edit <------- dont need this

// Show
 
// always add this after the last route
app.listen(PORT, () => console.log('hello i am listening on Port: ', PORT))
