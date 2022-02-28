'use strict';
var notificationOfInjury = require('../model/accidentIncidentAppModel.js');

exports.list_all_notificationOfInjurys = function (req, res) {
    console.log("LIST ALL ACCIDENT INCIDENT REPORTS");
    notificationOfInjury.getAllNotificationOfInjury(function (err, item) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        res.send(item);
    });
};
exports.read_a_notificationOfInjury = function (req, res) {
    notificationOfInjury.getNotificationOfInjuryByID(req.params.employee_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createNotificationOfInjuryReport = function (req, res) {
    console.log("POST CREATED");
    var new_notificationOfInjury = new notificationOfInjury(req.body);
    console.log( new_notificationOfInjury );
    //handles null error
    if (false) {
        res.status(400).send({error: true, message: 'Please provide minor incident'});
    } else {
        notificationOfInjury.createNotificationOfInjury(new_notificationOfInjury, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteNotificationOfInjuryReport = function (req, res) {
    notificationOfInjury.remove(req.params.employee_injury_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
