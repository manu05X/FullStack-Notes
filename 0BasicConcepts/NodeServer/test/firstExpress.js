const express = require('express');

const app = express();
const port = 3000;

//Define a route that responds with "Hello, world!"
app.get('/', (req,res)=>{
    res.send('Hello world!')
})

//Start the server
app.listen(port, ()=>{
    console.log('Hey! we are ready to take request on http://localhost:${port}')
})