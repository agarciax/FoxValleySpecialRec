'use strict';
var employeeIncident = require('../model/employeeInjuryAppModel.js');

exports.list_all_employeeInjuryReports = function (req, res) {
    console.log("LIST ALL EMPLOYEE INJURY REPORTS");
    employeeIncident.getAllEmployeeInjuryReports(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_employeeInjuryReport = function (req, res) {
    employeeIncident.getEmployeeInjuryByID(req.params.employee_injury_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createEmployeeInjuryReport = function (req, res) {
    console.log("POST CREATED");
    var new_employeeIncident = new employeeIncident(req.body);
    console.log( new_employeeIncident );
    //handles null error
    if (false) {
        res.status(400).send({error: true, message: 'Please provide minor incident'});
    } else {
        employeeIncident.createEmployeeInjuryReport(new_employeeIncident, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteMinorIncident = function (req, res) {
    employeeIncident.remove(req.params.employee_injury_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};
