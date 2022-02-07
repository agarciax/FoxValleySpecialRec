'use strict';
let mysql = require('mysql');
//local mysql db connection
let connection = mysql.createConnection({
    host: '45.55.136.114',
    user: 'Cuaderno_F2021',
    password: 'F00dTruck!',
    database: 'Cuaderno_F2021_'
});
connection.connect(function (err) {
    if (err) throw err;
});
module.exports = connection;