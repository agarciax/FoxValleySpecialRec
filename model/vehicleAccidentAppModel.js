'use strict';
var sql = require('./db.js');
//Task object constructor
var VehicleAccident = function (vehicleAccident) {
    this.Name_of_the_Agency = vehicleAccident.Name_of_the_Agency;
    this.Todays_Date = vehicleAccident.Todays_Date;
    this.Date_of_Incident= vehicleAccident.Date_of_Incident;
    this.Time_Of_Incident = vehicleAccident.Time_Of_Incident;
    this.Name_of_the_person_Completing_the_report = vehicleAccident.Name_of_the_person_Completing_the_report;
    this.Title_Of_Person_Completing_the_report = vehicleAccident.Title_Of_Person_Completing_the_report;
    this.Business_Phone = vehicleAccident.Business_Phone;
    this.Business_Email = vehicleAccident.Business_Email;
    this.How_did_the_incident_Occur = vehicleAccident.How_did_the_incident_Occur;
    this.Name_of_the_location = vehicleAccident.Name_of_the_location;
    this.Incident_Street_Address = vehicleAccident.Incident_Street_Address;
    this.Incident_City = vehicleAccident.Incident_City;
    this.Incident_State = vehicleAccident.Incident_State;
    this.Incident_Zip_Code = vehicleAccident.Incident_Zip_Code;
    this.Incident_Location = vehicleAccident.Incident_Location;
    this.Primary_Location = vehicleAccident.Primary_Location;
    this.Was_the_agency_vehicle_Occupied = vehicleAccident.Was_the_agency_vehicle_Occupied;
    this.Agency_Driver_Last_Name = vehicleAccident.Agency_Driver_Last_Name;
    this.Agency_Driver_First_Name = vehicleAccident.Agency_Driver_First_Name;
    this.Agency_Driver_Address = vehicleAccident.Agency_Driver_Address;
    this.Agency_Driver_City = vehicleAccident.Agency_Driver_City;
    this.Agency_Driver_State = vehicleAccident.Agency_Driver_State;
    this.Agency_Driver_Zip_Code = vehicleAccident.Agency_Driver_Zip_Code;
    this.Agency_Driver_Home_Phone_Number = vehicleAccident.Agency_Driver_Home_Phone_Number;
    this.Agency_Driver_Work_Phone_Number = vehicleAccident.Agency_Driver_Work_Phone_Number;
    this.Agency_driver_Cell_phone = vehicleAccident.Agency_driver_Cell_phone;
    this.Agency_driver_Email_Address = vehicleAccident.Agency_driver_Email_Address;
    this.is_this_driver_an_employee = vehicleAccident.is_this_driver_an_employee;
    this.if_yes_enter_job_title = vehicleAccident.if_yes_enter_job_title;
    this.Identify_type_of_driver = vehicleAccident.Identify_type_of_driver;
    this.Agency_vehicle_VIN = vehicleAccident.Agency_vehicle_VIN;
    this.Agency_vehicle_Make = vehicleAccident.Agency_vehicle_Make;
    this.Agency_vehicle_Model = vehicleAccident.Agency_vehicle_Model;
    this.Agency_vehicle_License_Number = vehicleAccident.Agency_vehicle_License_Number;
    this.Is_this_vehicle_drivable = vehicleAccident.Is_this_vehicle_drivable;
    this.If_no_provide_current_location_of_vehicle = vehicleAccident.If_no_provide_current_location_of_vehicle;
    this.Area_of_damage = vehicleAccident.Area_of_damage;
    this.Estimated_repair_cost = vehicleAccident.Estimated_repair_cost;
    this.was_a_trailer_involved = vehicleAccident.was_a_trailer_involved;

    this.Trailer_year = vehicleAccident.Trailer_year;
    this.Trailer_Make = vehicleAccident.Trailer_Make;
    this.Trailer_Model = vehicleAccident.Trailer_Model;
    this.Trailer_license_Number = vehicleAccident.Trailer_license_Number;
    this.Trailer_area_of_damage = vehicleAccident.Trailer_area_of_damage;
    this.Current_Location_of_trailer = vehicleAccident.Current_Location_of_trailer;
    this.Estimated_repair_cost_of_trailer = vehicleAccident.Estimated_repair_cost_of_trailer;

    this.Has_a_police_agency_conducted_an_investigation = vehicleAccident.Has_a_police_agency_conducted_an_investigation;
    this.What_police_agency_investigated_the_incident = vehicleAccident.What_police_agency_investigated_the_incident;
    this.Police_report_number = vehicleAccident.Police_report_number;

    this.Was_the_agency_driver_ticketed_arrested_or_cited_for_violation = vehicleAccident.Was_the_agency_driver_ticketed_arrested_or_cited_for_violation;
    this.If_yes_provide_details_of_the_ticket_arrest_or_violation = vehicleAccident.If_yes_provide_details_of_the_ticket_arrest_or_violation;

    this.How_was_the_person_involved_in_the_accident = vehicleAccident.How_was_the_person_involved_in_the_accident;
    this.Last_Name_Or_BusinessName = vehicleAccident.Last_Name_Or_BusinessName;
    this.First_name_not_necessary_for_business = vehicleAccident.First_name_not_necessary_for_business;
    this.Claimant_Address = vehicleAccident.Claimant_Address;
    this.Claimant_City = vehicleAccident.Claimant_City;
    this.Claimant_state = vehicleAccident.Claimant_state;
    this.Claimant_zip_code = vehicleAccident.Claimant_zip_code;
    this.Claimant_Home_phone_number = vehicleAccident.Claimant_Home_phone_number;
    this.Claimant_work_phone_number = vehicleAccident.Claimant_work_phone_number;
    this.Claimant_Cell_phone_number = vehicleAccident.Claimant_Cell_phone_number;
    this.Claimant_vehicle_make = vehicleAccident.Claimant_vehicle_make;
    this.Claimant_Model = vehicleAccident.Claimant_Model;
    this.Claimant_vehicle_year = vehicleAccident.Claimant_vehicle_year;
    this.Claimant_Area_of_damage = vehicleAccident.Claimant_Area_of_damage;
    this.Claimant_is_vehicle_drivable = vehicleAccident.Claimant_is_vehicle_drivable;
    this.Claimant_If_no_current_location_of_vehicle = vehicleAccident.Claimant_If_no_current_location_of_vehicle;
    this.Claimant_Extent_of_damage = vehicleAccident.Claimant_Extent_of_damage;
    this.Claimant_Describe_the_property_damage_other_than_vehicle = vehicleAccident.Claimant_Describe_the_property_damage_other_than_vehicle; //Line 70
    this.Claimant_Extent_of_damage_to_property_other_than_vehicle = vehicleAccident.Claimant_Extent_of_damage_to_property_other_than_vehicle;
    this.Claimant_Age_of_injured_person = vehicleAccident.Claimant_Age_of_injured_person;
    this.Claimant_Sex_of_injured_person = vehicleAccident.Claimant_Sex_of_injured_person;
    this.Claimant_Was_the_injured_person_transported_by_paramedics = vehicleAccident.Claimant_Was_the_injured_person_transported_by_paramedics;
    this.Claimant_If_yes_where_was_the_injured_person_taken = vehicleAccident.Claimant_If_yes_where_was_the_injured_person_taken;
    this.Claimant_Do_you_expect_the_injured_person_to_file_a_claim = vehicleAccident.Claimant_Do_you_expect_the_injured_person_to_file_a_claim;
    this.Claimant_Describe_the_injury = vehicleAccident.Claimant_Describe_the_injury;

    this.How_was_the_person_involved_in_the_accident2 = vehicleAccident.How_was_the_person_involved_in_the_accident2;
    this.Last_Name_Or_BusinessName = vehicleAccident.Last_Name_Or_BusinessName;
    this.First_name_not_necessary_for_business_form_three = vehicleAccident.First_name_not_necessary_for_business_form_three;
    this.Address_form_3 = vehicleAccident.Address_form_3;
    this.city_form_3 = vehicleAccident.city_form_3;
    this.state_form_3 = vehicleAccident.state_form_3;
    this.zip_code_form_3 = vehicleAccident.zip_code_form_3;
    this.Home_phone_number_form_3 = vehicleAccident.Home_phone_number_form_3;
    this.cell_phone_number_form_3 = vehicleAccident.cell_phone_number_form_3;
    this.work_phone_number_form_3 = vehicleAccident.work_phone_number_form_3;
    this.vehicle_make_form_3 = vehicleAccident.vehicle_make_form_3;
    this.vehicle_model_form_3 = vehicleAccident.vehicle_model_form_3;
    this.vehicle_year_form_3 = vehicleAccident.vehicle_year_form_3;
    this.Area_of_damage_form_3 = vehicleAccident.Area_of_damage_form_3;
    this.Is_vehicle_driveable_form_3 = vehicleAccident.Is_vehicle_driveable_form_3;
    this.If_no_current_location_of_vehicle_form_3 = vehicleAccident.If_no_current_location_of_vehicle_form_3;
    this.Extent_of_damage_form_3 = vehicleAccident.Extent_of_damage_form_3;
    this.Describe_the_property_damage_other_than_vehicle_form_3 = vehicleAccident.Describe_the_property_damage_other_than_vehicle_form_3;
    this.Extent_of_damage_to_property_other_than_vehicle_form_3 = vehicleAccident.Extent_of_damage_to_property_other_than_vehicle_form_3;
    this.Age_of_injured_person_form_4 = vehicleAccident.Age_of_injured_person_form_4;
    this.Sex_of_injured_person_form_3 = vehicleAccident.Sex_of_injured_person_form_3;
    this.Was_the_injured_person_transported_by_paramedics_form_4 = vehicleAccident.Was_the_injured_person_transported_by_paramedics_form_4;
    this.If_yes_where_was_the_injured_person_taken_form_4 = vehicleAccident.If_yes_where_was_the_injured_person_taken_form_4;
    this.Do_you_expect_the_injured_person_to_file_a_claim_form_4 = vehicleAccident.Do_you_expect_the_injured_person_to_file_a_claim_form_4;
    this.Describe_the_injury_form_4 = vehicleAccident.Describe_the_injury_form_4;

    this.Witness_Last_name = vehicleAccident.Witness_Last_name;
    this.Witness_first_name = vehicleAccident.Witness_first_name;
    this.Witness_Address = vehicleAccident.Witness_Address;
    this.Witness_city = vehicleAccident.Witness_city;
    this.Witness_state = vehicleAccident.Witness_state;
    this.Witness_Zip_code = vehicleAccident.Witness_Zip_code;
    this.Witness_Home_phone_number = vehicleAccident.Witness_Home_phone_number;
    this.Witness_work_phone_number = vehicleAccident.Witness_work_phone_number;
    this.Witness_cell_phone_number = vehicleAccident.Witness_cell_phone_number;
    this.Witness_to_accident = vehicleAccident.Witness_to_accident;
    this.Witness_Relation_to_injured_person_or_property_owner = vehicleAccident.Witness_Relation_to_injured_person_or_property_owner;
    this.Witness_Did_witness_make_any_statements = vehicleAccident.Witness_Did_witness_make_any_statements;
    this.Witness_If_yes_what_did_witness_said = vehicleAccident.Witness_If_yes_what_did_witness_said;
    this.Where_was_witness_when_the_accident_occurred = vehicleAccident.Where_was_witness_when_the_accident_occurred;
    this.Was_the_driver_of_the_agency_vehicle_conducting_agency_business = vehicleAccident.Was_the_driver_of_the_agency_vehicle_conducting_agency_business;
    this.What_street_was_the_agency_driver_on_form_4 = vehicleAccident.What_street_was_the_agency_driver_on_form_4;
    this.What_street_was_the_other_driver_driving_on = vehicleAccident.What_street_was_the_other_driver_driving_on;
    this.What_direction_was_the_agency_driver_traveling = vehicleAccident.What_direction_was_the_agency_driver_traveling;
    this.What_direction_was_the_other_driver_traveling = vehicleAccident.What_direction_was_the_other_driver_traveling;
    this.Weather_condition = vehicleAccident.Weather_condition;
};
VehicleAccident.getVehicleAccidentByID = function (vehicle_accident_id, result) {
    sql.query("Select * from Vehicle_Accident_Report WHERE vehicle_accident_id = ? ", vehicle_accident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
VehicleAccident.getAllVehicleAccidents = function (result) {
    sql.query("Select * from Vehicle_Accident_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
VehicleAccident.createVehicleAccident = function (newAccident, result) {
    sql.query("INSERT INTO Vehicle_Accident_Report set ?", newAccident, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
VehicleAccident.remove = function (vehicle_accident_id, result) {
    sql.query("DELETE FROM Vehicle_Accident_Report WHERE vehicle_accident_id = ?", vehicle_accident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = VehicleAccident;