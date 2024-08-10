/*Practice with Express
In this lab, let us try and practice a few common things with express.js.

Basic routing
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:
*/

app.METHOD(PATH, HANDLER)
/*
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:
*/
app.get('/', function (req, res) {
  res.send('Hello World!')
})
//Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
//Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
//Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})