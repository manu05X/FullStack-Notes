/*
You should start a server on port `process.env.PUBLIC_PORT`
The route `/` should return a status code of 418
The route `/` should have a text response of "YOLO"
*/

const http = require('http');

//create an HTTP server
const server = http.createServer((req, res)=> {
    //Set the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello client over there!!!!!')
    //Send the response
    res.end()
})

//console.log(process.env.PUBLIC_PORT)

//Listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log('Hey! we are ready to take request on http://localhost:${port}');
})
