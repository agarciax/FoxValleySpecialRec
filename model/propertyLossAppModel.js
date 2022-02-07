'use strict';
var sql = require('./db.js');
//Task object constructor
var PropertyLoss = function (propertyLoss) {
    this.Name_of_the_Agency = propertyLoss.Name_of_the_Agency;
    this.Todays_Date = propertyLoss.Todays_Date;
    this.Date_of_Incident= propertyLoss.Date_of_Incident;
    this.Time_Of_Incident = propertyLoss.Time_Of_Incident;
    this.Name_of_the_person_Completing_the_report = propertyLoss.Name_of_the_person_Completing_the_report;
    this.Title_Of_Person_Completing_the_report = propertyLoss.Title_Of_Person_Completing_the_report;
    this.Business_Phone = propertyLoss.Business_Phone;
    this.Business_Email = propertyLoss.Business_Email;
    this.How_did_the_incident_occur_and_what_property_was_damaged = propertyLoss.How_did_the_incident_occur_and_what_property_was_damaged;
    this.Name_of_location = propertyLoss.Name_of_location;
    this.Street_Address_Incident_Location = propertyLoss.Street_Address_Incident_Location
    this.City_Incident_Location = propertyLoss.City_Incident_Location
    this.State_Incident_Location = propertyLoss.State_Incident_Location
    this.Zip_Code = propertyLoss.Zip_Code
    this.Location_Specify = propertyLoss.Location_Specify
    this.Primary_Location = propertyLoss.Primary_Location
    this.Estimate_of_Loss = propertyLoss.Estimate_of_Loss
    this.Contact_Person_Facility = propertyLoss.Contact_Person_Facility
    this.Contact_Person_Email = propertyLoss.Contact_Person_Email
    this.Contact_Person_Phone_Number = propertyLoss.Contact_Person_Phone_Number
    this.Damage_Third_Party = propertyLoss.Damage_Third_Party
    this.Person_Responsible_Name = propertyLoss.Person_Responsible_Name
    this.Person_Responsible_Street_Address = propertyLoss.Person_Responsible_Street_Address
    this.Person_Responsible_City = propertyLoss.Person_Responsible_City
    this.Person_Responsible_State = propertyLoss.Person_Responsible_State
    this.Zip_Code_Person_Responsible = propertyLoss.Zip_Code_Person_Responsible
    this.Police_Investigation_Yes_No_Unknown = propertyLoss.Police_Investigation_Yes_No_Unknown
    this.What_Police_Agency = propertyLoss.What_Police_Agency
    this.Police_Report_Number = propertyLoss.Police_Report_Number
    this.Were_Criminal_Charges = propertyLoss.Were_Criminal_Charges
};
PropertyLoss.getPropertyLossByID = function (property_loss_id, result) {
    sql.query("Select * from Property_Loss_Report WHERE property_loss_id = ? ", property_loss_id, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
PropertyLoss.getAllPropertyLossReports = function (result) {
    sql.query("Select * from Property_Loss_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Property Loss Reports : ', res);
            result(null, res);
        }
    });
};
PropertyLoss.createPropertyLossReport = function (newPropertyLoss, result) {
    sql.query("INSERT INTO Property_Loss_Report set ?", newPropertyLoss, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
PropertyLoss.remove = function (property_loss_id, result) {
    sql.query("DELETE FROM Property_Loss_Report WHERE property_loss_id = ?", property_loss_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = PropertyLoss;