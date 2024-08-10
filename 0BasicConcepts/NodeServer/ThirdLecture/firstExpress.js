const express = require('express');

const app = express();
const port = 4000;

//Define a route that responds with "Hello, world!"
app.get('/', (req,res)=>{
    res.send('Hello world from Files to browserß!')
})

app.patch('/', (req,res) => {
    res.send('Hello !')
})

//here we are using keyword function so now not using =>
app.get('/something', function (req, res) {
    res.send('Hello World!')
  })

app.post('/something', (req, res) => {
    res.send('This is usually not visible')
})

//Start the server
app.listen(port, ()=>{
    console.log('Hey! we are ready to take request on http://localhost:${port}')
})
//Define a route that responds with "Hello, world!"
// app.patch('/', (req,res) => {
//     res.send('Hello !')
// })

// //here we are using keyword function so now not using =>
// app.get('/something', function (req, res) {
//     res.send('Hello World!')
//   })

// app.post('/something', (req, res) => {
//     res.send('This is usually not visible')
// })

// //Start the server
// app.listen(port, ()=>{
//     console.log('Hey! we are ready to take request on http://localhost:${port}')
// })