'use strict';
var sql = require('./db.js');
//Task object constructor
var AccidentInjury = function (accidentInjury) {
    this.accident_incident_id = accidentInjury.accident_incident_id;
    this.Agency_Name = accidentInjury.Agency_Name;
    this.Todays_Date = accidentInjury.Todays_Date;
    this.Date_of_Incident = accidentInjury.Date_of_Incident;
    this.Time_of_incident = accidentInjury.Time_of_incident;
    this.Name_of_the_person_Completing_the_report = accidentInjury.Name_of_the_person_Completing_the_report;
    this.Title_Of_Person_Completing_the_report = accidentInjury.Title_Of_Person_Completing_the_report;
    this.Business_Phone = accidentInjury.Business_Phone;
    this.Business_Email = accidentInjury.Business_Email;
    this.How_did_the_incident_Occur = accidentInjury.How_did_the_incident_Occur;
    this.Name_of_the_location = accidentInjury.Name_of_the_location;
    this.Is_there_an_address_for_incident_Location = accidentInjury.Is_there_an_address_for_incident_Location;
    this.Street_Address = accidentInjury.Street_Address;
    this.City = accidentInjury.City;
    this.State = accidentInjury.State;
    this.Zip_code = accidentInjury.Zip_code;
    this.Location = accidentInjury.Location;
    this.Primary_Location = accidentInjury.Primary_Location;
    this.Was_a_person_injured = accidentInjury.Was_a_person_injured;
    this.Last_name_employee_injury = accidentInjury.Last_name_employee_injury;
    this.First_name_employee_injury = accidentInjury.First_name_employee_injury;
    this.Address_employee_injury = accidentInjury.Address_employee_injury;
    this.city_employee_injury = accidentInjury.city_employee_injury;
    this.State_employee_injury = accidentInjury.State_employee_injury;
    this.Zip_code_employee_injury = accidentInjury.Zip_code_employee_injury;
    this.Home_phone_Number = accidentInjury.Home_phone_Number;
    this.Work_phone_number = accidentInjury.Work_phone_number;
    this.Cell_phone_number = accidentInjury.Cell_phone_number;
    this.Age = accidentInjury.Age;
    this.Sex = accidentInjury.Sex;
    this.Is_injured_person_an_agency_volunteer = accidentInjury.Is_injured_person_an_agency_volunteer;
    this.Describe_the_injury = accidentInjury.Describe_the_injury;
    this.Did_injured_person_make_any_statements = accidentInjury.Did_injured_person_make_any_statements;
    this.If_yes_what_did_injured_person_say = accidentInjury.If_yes_what_did_injured_person_say;
    this.was_first_aid_administered = accidentInjury.was_first_aid_administered;
    this.Name_and_position_of_person_who_administered_the_First_aid = accidentInjury.Name_and_position_of_person_who_administered_the_First_aid;
    this.What_first_aid_was_given = accidentInjury.What_first_aid_was_given;
    this.Did_first_aid_involve_AED_and_or_CPR = accidentInjury.Did_first_aid_involve_AED_and_or_CPR;
    this.Were_paramedic_services_offered = accidentInjury.Were_paramedic_services_offered;
    this.Were_Police_Called = accidentInjury.Were_Police_Called;
    this.Name_of_the_police_department = accidentInjury.Name_of_the_police_department;
    this.Name_of_the_officer = accidentInjury.Name_of_the_officer;
    this.did_you_expect_this_person_submit_a_claim = accidentInjury.did_you_expect_this_person_submit_a_claim;
    this.Was_Property_Damaged_As_A_Result_Of_This_AccidentOrIncident = accidentInjury.Was_Property_Damaged_As_A_Result_Of_This_AccidentOrIncident;
    this.If_Yes_How_Was_The_Person_Involved_In_The_AccidentOrIncident = accidentInjury.If_Yes_How_Was_The_Person_Involved_In_The_AccidentOrIncident;
    this.last_name_Property_damage = accidentInjury.last_name_Property_damage;
    this.first_name_Property_damage = accidentInjury.first_name_Property_damage;
    this.Address_Property_damage = accidentInjury.Address_Property_damage;
    this.city_Property_damage = accidentInjury.city_Property_damage;
    this.state_Property_damage = accidentInjury.state_Property_damage;
    this.zip_code_Property_damage = accidentInjury.zip_code_Property_damage;
    this.phone_num_Property_Damage = accidentInjury.phone_num_Property_Damage
    this.Describe_the_property_damage = accidentInjury.Describe_the_property_damage;
    this.Last_name_witness_information = accidentInjury.Last_name_witness_information;
    this.first_name_witness_information = accidentInjury.first_name_witness_information;
    this.Address_witness_information = accidentInjury.Address_witness_information;
    this.City_witness_information = accidentInjury.City_witness_information;
    this.State_witness_information = accidentInjury.State_witness_information;
    this.zip_code_witness_information = accidentInjury.zip_code_witness_information;
    this.phone_number_witness_information = accidentInjury.phone_number_witness_information;
    this.did_Witness_make_any_statements = accidentInjury.did_Witness_make_any_statements;
    this.If_yes_what_did_witness_say = accidentInjury.If_yes_what_did_witness_say;
    this.Where_was_witness_when_the_accident = accidentInjury.Where_was_witness_when_the_accident;
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