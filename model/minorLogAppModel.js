'use strict';
var sql = require('./db.js');
//Task object constructor
var MinorIncident = function (minorIncident) {
    this.injury_date = minorIncident.injury_date;
    this.injury_time = minorIncident.injury_time;
    this.name_of_injured= minorIncident.name_of_injured;
    this.injury_location = minorIncident.injury_location;
    this.treatment = minorIncident.treatment;
    this.how_injury_occurred = minorIncident.how_injury_occurred;
    this.facility_where_injury_occurred = minorIncident.facility_where_injury_occurred;
    this.full_name_of_staff = minorIncident.full_name_of_staff;
};
MinorIncident.getMinorIncidentByID = function (minor_injury_id, result) {
    //sql.query("Select minor_injury_id, injury_date, injury_time, name_of_injured, injury_location, treatment, how_injury_occurred, facility_where_injury_occurred, full_name_of_staff from Minor_Injury_Log where minor_injury_id = ? ", minor_injury_id, function (err, res) {
    sql.query("Select * from Minor_Injury_Log WHERE minor_injury_id = ? ", minor_injury_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
MinorIncident.getAllMinorIncidents = function (result) {
    sql.query("Select * from Minor_Injury_Log", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
MinorIncident.createMinorIncident = function (newIncident, result) {
    sql.query("INSERT INTO Minor_Injury_Log set ?", newIncident, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
MinorIncident.remove = function (minor_injury_id, result) {
    sql.query("DELETE FROM Minor_Injury_Log WHERE minor_injury_id = ?", minor_injury_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = MinorIncident;