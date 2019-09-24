const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const mongoose = require('mongoose');
const path = require('path');
// const middleware = require('./app/middleware/auth.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', config.origin);
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// app.use(express.static('../public/build'));
app.use(express.static('../public'));


// Paths which authentication is required
// app.use(config.authPaths, middleware.verify);

require('./app/routes/note.routes.js')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , '../public/build/index.html'));
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
