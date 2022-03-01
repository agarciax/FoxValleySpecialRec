'use strict';
var sql = require('./db.js');
//Task object constructor
var NotificationOfInjury = function (notificationOfInjury) {
    this.employee_injury_id  = notificationOfInjury.employee_injury_id;
    this.Employee_Name  = notificationOfInjury.Employee_Name;
    this.Date_of_Incident  = notificationOfInjury.Date_of_Incident;
    this.Time_of_Incident  = notificationOfInjury.Time_of_Incident;
    this.Specific_location_of_accident  = notificationOfInjury.Specific_location_of_accident;
    this.Are_you_reporting_the_injury_for_the_first_time_using_this_form  = notificationOfInjury.Are_you_reporting_the_injury_for_the_first_time_using_this_form;
    this.If_no_when_did_you_first_report_the_injury_And   = notificationOfInjury.If_no_when_did_you_first_report_the_injury_And ;
    this.Describe_how_the_injury_occurred  = notificationOfInjury.Describe_how_the_injury_occurred;
    this.Name_all_people_present_at_the_time_of_injury  = notificationOfInjury.Name_all_people_present_at_the_time_of_injury;
    this.Identify_all_body_parts_you_injured  = notificationOfInjury.Identify_all_body_parts_you_injured;
    this.Did_you_seek_medical_attention_on_the_date_of_the_accident  = notificationOfInjury.Did_you_seek_medical_attention_on_the_date_of_the_accident;
    this.If_yes_where_did_you_seek_treatment  = notificationOfInjury.If_yes_where_did_you_seek_treatment;
    this.Have_you_injured_this_body_part_previously  = notificationOfInjury.Have_you_injured_this_body_part_previously;
    this.If_yes_describe_which_body_part_and_what_the_prior_   = notificationOfInjury.If_yes_describe_which_body_part_and_what_the_prior_ ;
    this.If_yes_where_did_you_receive_treatment  = notificationOfInjury.If_yes_where_did_you_receive_treatment;
    this.The_above_information_is_true_and_accurate  = notificationOfInjury.The_above_information_is_true_and_accurate;
    this.Notification_of_injury_was_received_on  = notificationOfInjury.Notification_of_injury_was_received_on;
    this.Notification_of_injury_was_received_by  = notificationOfInjury.Notification_of_injury_was_received_by;

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