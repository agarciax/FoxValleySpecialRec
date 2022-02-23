'use strict';
var sql = require('./db.js');
//Task object constructor
var EmployeeInjury = function (employeeInjury) {
    //this.injury_date = minorIncident.injury_date;

    this.employee_injury_id = employeeInjury.employee_injury_id;
    this.Agency_Name = employeeInjury.Agency_Name;
    this.Todays_Date = employeeInjury.Todays_Date;
    this.Time_of_Incident = employeeInjury.Time_of_Incident;
    this.Name_of_person_completing_report = employeeInjury.Name_of_person_completing_report;
    this.Title_Of_Person_Completing_report = employeeInjury.Title_Of_Person_Completing_report;
    this.Business_phone = employeeInjury.Business_phone;
    this.Business_email_address = employeeInjury.Business_email_address;
    this.How_did_the_incident_occur_provide_online_online_description = employeeInjury.How_did_the_incident_occur_provide_online_online_description;
    this.Name_of_the_location = employeeInjury.Name_of_the_location
    this.Is_there_an_address_for_this_location_if_yes_provide_address = employeeInjury.Is_there_an_address_for_this_location_if_yes_provide_address;
    this.Street_Address = employeeInjury.Street_Address;
    this.city = employeeInjury.city;
    this.state = employeeInjury.state;
    this.Zipcode = employeeInjury.Zipcode;
    this.location = employeeInjury.location;
    this.Primary_Location = employeeInjury.Primary_Location;
    this.Employers_FEIN = employeeInjury.Employers_FEIN;
    this.Did_the_employee_miss_more_than_three_scheduled_workdays = employeeInjury.Did_the_employee_miss_more_than_three_scheduled_workdays;
    this.What_was_the_employee_doing_when_the_accident_occurred = employeeInjury.What_was_the_employee_doing_when_the_accident_occurred;
    this.How_did_the_incident_occur_provide_detail_description = employeeInjury.How_did_the_incident_occur_provide_detail_description;
    this.Employee_last_name = employeeInjury.Employee_last_name;
    this.Employee_first_name = employeeInjury.Employee_first_name;
    this.Employee_Address = employeeInjury.Employee_Address;
    this.Employee_city = employeeInjury.Employee_city;
    this.Employee_state = employeeInjury.Employee_state;
    this.Employee_Zip_code = employeeInjury.Employee_Zip_code;
    this.Home_phone = employeeInjury.Home_phone;
    this.Work_phone = employeeInjury.Work_phone;
    this.Cell_phone = employeeInjury.Cell_phone;
    this.Best_number_to_contact_employee = employeeInjury.Best_number_to_contact_employee;
    this.Email = employeeInjury.Email;

    this.Social_security_number = employeeInjury.Social_security_number;

    this.Date_of_birth = employeeInjury.Date_of_birth;
    this.Gender = employeeInjury.Gender;
    this.Marital_status = employeeInjury.Marital_status;

    this.Number_of_dependents = employeeInjury.Number_of_dependents;

    this.Does_employee_speak_english = employeeInjury.Does_employee_speak_english;
    this.Average_weekly_wages = employeeInjury.Average_weekly_wages;
    this.Job_title_occupation = employeeInjury.Job_title_occupation;
    this.What_is_the_employees_employment_status = employeeInjury.What_is_the_employees_employment_status;
    this.Date_hire = employeeInjury.Date_hire;
    this.What_is_the_employees_tenure = employeeInjury.What_is_the_employees_tenure
    this.Time_employee_began_work_on_day_of_incident = employeeInjury.Time_employee_began_work_on_day_of_incident;
    this.Last_date_employee_worked_prior_to_date_of_incident = employeeInjury.Last_date_employee_worked_prior_to_date_of_incident;
    this.If_the_employee_died_as_a_result_the_accident_death_date = employeeInjury.If_the_employee_died_as_a_result_the_accident_death_date;
    this.Did_the_incident_occur_on_agency_premises = employeeInjury.Did_the_incident_occur_on_agency_premises;
    this.Injury_or_illness = employeeInjury.Injury_or_illness;
    this.Describe_the_injury_or_illness = employeeInjury.Describe_the_injury_or_illness;
    this.What_object_or_substance_if_any_directly_harmed_the_employee = employeeInjury.What_object_or_substance_if_any_directly_harmed_the_employee;
    this.Did_the_injured_employee_seek_medical_attention = employeeInjury.Did_the_injured_employee_seek_medical_attention;
    this.If_yes_was_the_treatment_given_away_from_worksite = employeeInjury.If_yes_was_the_treatment_given_away_from_worksite;
    this.Was_the_employee_treated_in_an_emergency_room = employeeInjury.Was_the_employee_treated_in_an_emergency_room;
    this.Was_the_employee_hospitalized_overnight_as_an_inpatient = employeeInjury.Was_the_employee_hospitalized_overnight_as_an_inpatient;
    this.Name_of_treating_physician_health_care_provider_emergency_room = employeeInjury.Name_of_treating_physician_health_care_provider_emergency_room;
    this.Address_page_2 = employeeInjury.Address_page_2;
    this.City_page_2 = employeeInjury.City_page_2;
    this.State_page_2 = employeeInjury.State_page_2;
    this.Zip_Code_page_2 = employeeInjury.Zip_Code_page_2;
    this.Phone_number_page_2 = employeeInjury.Phone_number_page_2;

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