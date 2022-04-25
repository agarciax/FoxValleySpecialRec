require("dotenv").config();
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.DB_PORT;

let cors = require('cors')
app.use(cors()) // Use this after the variable declaration

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// connect to database
mc.connect();
app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route