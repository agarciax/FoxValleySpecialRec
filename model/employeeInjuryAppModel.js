'use strict';
var sql = require('./db.js');
//Task object constructor
var EmployeeInjury = function (employeeInjury) {
    //this.injury_date = minorIncident.injury_date;

};
EmployeeInjury.getEmployeeInjuryByID = function (employee_injury_id, result) {
    //sql.query("Select minor_injury_id, injury_date, injury_time, name_of_injured, injury_location, treatment, how_injury_occurred, facility_where_injury_occurred, full_name_of_staff from Minor_Injury_Log where minor_injury_id = ? ", minor_injury_id, function (err, res) {
    sql.query("Select * from Employee_injury_report WHERE employee_injury_id = ? ", employee_injury_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
EmployeeInjury.getAllEmployeeInjuryReports = function (result) {
    sql.query("Select * from Employee_injury_report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
EmployeeInjury.createEmployeeInjuryReport = function (newEmpInjury, result) {
    sql.query("INSERT INTO Employee_injury_report set ?", newEmpInjury, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
EmployeeInjury.remove = function (employee_injury_id, result) {
    sql.query("DELETE FROM Employee_injury_report WHERE employee_injury_id = ?", employee_injury_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = EmployeeInjury;