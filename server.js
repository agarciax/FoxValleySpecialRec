const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 5000;

let cors = require('cors')
app.use(cors()) // Use this after the variable declaration

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: '45.55.136.114',
    user: 'Cuaderno_F2021',
    password: 'F00dTruck!',
    database: 'Cuaderno_F2021'
});

// connect to database
mc.connect();
app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route