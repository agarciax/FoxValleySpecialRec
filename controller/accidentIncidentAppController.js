'use strict';
var accidentIncident = require('../model/accidentIncidentAppModel.js');

exports.list_all_accidentIncidentReports = function (req, res) {
    console.log("LIST ALL ACCIDENT INCIDENT REPORTS");
    accidentIncident.getAllAccidentIncidentReports(function (err, item) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        res.send(item);
    });
};
exports.read_a_accidentIncidentReport = function (req, res) {
    accidentIncident.getAccidentInjuryByID(req.params.accident_incident_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createAccidentIncidentReport = function (req, res) {
    console.log("POST CREATED");
    var new_accidentIncident = new accidentIncident(req.body);
    console.log( new_accidentIncident );
    //handles null error
    if (false) {
        res.status(400).send({error: true, message: 'Please provide minor incident'});
    } else {
        accidentIncident.createAccidentIncidentReport(new_accidentIncident, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteAccidentIncidentReport = function (req, res) {
    accidentIncident.remove(req.params.accident_incident_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
