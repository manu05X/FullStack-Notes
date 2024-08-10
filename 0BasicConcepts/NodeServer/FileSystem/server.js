const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

const port = 4100;

// // to send a file to a server, served at URL http://localhost:4000
// app.get('/', (req,res)=>{
//     res.sendFile(
//         path.resolve(__dirname, 'public/index.html')
//     )
// })

//static file is send http://localhost:4000/static/
app.use('/', express.static(path.resolve(__dirname, 'public')))

//here we are using keyword function so now not using =>
// app.get('/something', function (req, res) {
//     res.send('Hello World!')
//   })

app.use(bodyParser.json())

app.post('/data', (req, res) => {
    console.log(req.body)
    res.json({status: 'ok'})
})

//Start the server
app.listen(port, ()=>{
    console.log('Hey! we are ready to take request on http://localhost:${port}')
})

/*
path.resolve(__dirname, 'public/index.html'): This is a call to the path.resolve function, which is used to resolve and 
construct an absolute file path. It takes two arguments: __dirname and 'public/index.html'. __dirname is a Node.js 
global variable that represents the directory name of the current module (in this case, the directory where your 
    JavaScript file is located). 'public/index.html' is a relative path to the HTML file you want to send.
*/

/*
So, in summary, when a GET request is made to the root URL ("/"), this route handler uses res.sendFile to send 
the HTML file located at public/index.html as a response to the client's request. 
The path.resolve function ensures that the file path is constructed correctly, regardless of the current working directory.
*/