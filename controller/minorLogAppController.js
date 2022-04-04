'use strict';
var minorIncident = require('../model/minorLogAppModel.js');

exports.list_all_minorIncidents = function (req, res) {
    console.log("LIST ALL MINOR ACCIDENTS");
    minorIncident.getAllMinorIncidents(function (err, item) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_minorIncident = function (req, res) {
    minorIncident.getMinorIncidentByID(req.params.minor_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createMinorIncident = function (req, res) {
    var new_minorIncident = new minorIncident(req.body);
    //handles null error
    if (!new_minorIncident.injury_date || !new_minorIncident.injury_time || !new_minorIncident.name_of_injured ||
        !new_minorIncident.injury_location || !new_minorIncident.treatment || !new_minorIncident.how_injury_occurred ||
        !new_minorIncident.facility_where_injury_occurred || !new_minorIncident.full_name_of_staff) {
        res.status(400).send({error: true, message: 'Please fill out all of the required fields'});
    } else {
        minorIncident.createMinorIncident(new_minorIncident, function (err, item) {
            res.setHeader('Content-Type', 'application/json');
            console.log("Minor log record has been submitted");
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteMinorIncident = function (req, res) {
    minorIncident.remove(req.params.minor_injury_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
