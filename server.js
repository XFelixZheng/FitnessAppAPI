// get dependencies and configure api server & port
const express = require('express'), // Note: "Express" is a webframework-extension for Node.js for easier handling 
    app = express(),
    port = process.env.PORT || '3000', // assign port number to API server
    mongoose = require('mongoose'), // Note: "Mongoose" is an ODM library for MongoDB/Node.js, e.g. handles connections/schemas
    User = require('./api/models/userListModel'), // load Model for
    bodyParser = require('body-parser');

// connect to local MongoDB database (non-secured)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fitnessapp', {useNewUrlParser: true , useUnifiedTopology: true});

// handle HTTP request via body-parser (needed with express.js)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get routes/access to functions defined in the routes & bind it on app
const routes = require('./api/routes/userListRoutes');
routes(app);

app.listen(port);
console.log('userList RESTful API server started on: ' + port);