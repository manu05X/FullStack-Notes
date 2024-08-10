/*
Routing -> Going to different location/path/route for getting/creating/updating/deleting etc different resources using different
            http methods such as GET, POST, PUT, DELETE etc...

use for creating random data generation https://www.mockaroo.com/

we are using MOCK_DATA file that we generate from https://www.mockaroo.com/ 

*/

const express = require("express");

const app = express();
const PORT = 8002;

//Routing

//Start the server
app.listen(PORT, () => {
  console.log(`Hey! Server is running on http://localhost:${PORT}`);
});
