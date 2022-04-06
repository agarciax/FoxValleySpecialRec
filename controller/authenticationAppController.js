'use strict';
var LoginInfo = require('../model/authenticationAppModel');


exports.list_all_users = function (req, res) {
    console.log("Users");
    LoginInfo.getAllLoginInfos(function (err, item) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_loginInfo = function (req, res) {
    LoginInfo.getLoginID(req.params.user_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createLoginInfo = function (req, res) {
    var new_LoginInfo = new LoginInfo(req.body);
    //handles null error
    if (!new_LoginInfo.userID || !new_LoginInfo.username || !new_LoginInfo.password) {
        res.status(400).send({error: true, message: 'Please fill out all of the required fields'});
    } else {
        LoginInfo.createLoginInfo(new_LoginInfo, function (err, item) {
            res.setHeader('Content-Type', 'application/json');
            console.log("Login info has been submitted");
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteLoginInfo = function (req, res) {
    LoginInfo.remove(req.params.user_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
