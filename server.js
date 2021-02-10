const express = require('express');

const cors = require('cors'); 

const bodyParser = require('body-parser');
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 4800;
app.listen(port, () => {
    console.log(`Server Running On: http://localhost:4800`);
});
//get data
app.get('/All', (request, response) => {
    response.send(projectData);
});
//post data
app.post('/postData', (request, response) => {
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
    };
    response.send(projectData);
});