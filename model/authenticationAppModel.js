'use strict';
var sql = require('./db.js');
//Task object constructor
var LoginInfo = function (LoginPage) {
    this.userID = LoginPage.userID;
    this.username = LoginPage.username;
    this.password = LoginPage.password;

};
LoginInfo.getLoginID = function (user_id, result) {

    sql.query("Select * from Login_Info WHERE user_id = ? ", user_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
LoginInfo.getAllLoginInfos = function (result) {
    sql.query("Select * from Login_Info", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};

LoginInfo.createLoginInfo = function (newIncident, result) {
    sql.query("INSERT INTO Login_Info set ?", newIncident, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
LoginInfo.remove = function (login_id, result) {
    sql.query("DELETE FROM Login_Info WHERE user_id = ?", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};



module.exports = LoginInfo;