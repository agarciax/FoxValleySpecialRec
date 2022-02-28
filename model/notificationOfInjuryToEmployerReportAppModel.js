'use strict';
var sql = require('./db.js');
//Task object constructor
var NotificationOfInjury = function (notificationOfInjury) {
    //this.injury_date = minorIncident.injury_date;

};
NotificationOfInjury.getNotificationOfInjuryByID = function (minor_injury_id, result) {
    //sql.query("Select minor_injury_id, injury_date, injury_time, name_of_injured, injury_location, treatment, how_injury_occurred, facility_where_injury_occurred, full_name_of_staff from Minor_Injury_Log where minor_injury_id = ? ", minor_injury_id, function (err, res) {
    sql.query("Select * from Notification_of_Injury_to_Employer_Report WHERE employee_injury_id = ? ", employee_injury_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
NotificationOfInjury.getAllNotificationOfInjury = function (result) {
    sql.query("Select * from Notification_of_Injury_to_Employer_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
NotificationOfInjury.createNotificationOfInjury = function (newNotification, result) {
    sql.query("INSERT INTO Notification_of_Injury_to_Employer_Report set ?", newNotification, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
NotificationOfInjury.remove = function (minor_injury_id, result) {
    sql.query("DELETE FROM Notification_of_Injury_to_Employer_Report WHERE employee_injury_id = ?", employee_injury_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = NotificationOfInjury;