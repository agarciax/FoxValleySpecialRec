'use strict';
var sql = require('./db.js');
//Task object constructor
var AccidentInjury = function (accidentInjury) {
    this.Name_of_the_Agency = accidentInjury.Name_of_the_Agency;
    this.Todays_Date = accidentInjury.Todays_Date;
    this.Date_of_Incident= accidentInjury.Date_of_Incident;
    this.Time_Of_Incident = accidentInjury.Time_Of_Incident;
    this.Name_of_the_person_Completing_the_report = accidentInjury.Name_of_the_person_Completing_the_report;
    this.Title_Of_Person_Completing_the_report = accidentInjury.Title_Of_Person_Completing_the_report;
    this.Business_Phone = accidentInjury.Business_Phone;

};
AccidentInjury.getAccidentInjuryByID = function (accident_incident_id, result) {
    sql.query("Select * from Accident_Incident_Report WHERE accident_incident_id = ? ", accident_incident_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
AccidentInjury.getAllAccidentIncidentReports = function (result) {
    sql.query("Select * from Accident_Incident_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Accident Incident Reports : ', res);
            result(null, res);
        }
    });
};
AccidentInjury.createAccidentIncidentReport = function (newAccReport, result) {
    sql.query("INSERT INTO Accident_Incident_Report set ?", newAccReport, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
AccidentInjury.remove = function (accident_incident_id, result) {
    sql.query("DELETE FROM Accident_Incident_Report WHERE accident_incident_id = ?", accident_incident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = AccidentInjury;