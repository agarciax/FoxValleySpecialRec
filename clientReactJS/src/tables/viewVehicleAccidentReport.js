import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewVehicleAccidentReport = () => {

    const { data: reports, isPending, error} = UseFetch('https://api.foxvalleyspecialrec.com/fvsra/vehicleAccidentReport');
    let header = ["Vehicle Accident ID", "Agency Name", "Today's Date", "Date Of Incident", "Time Of Incident", "Name Of Person Completing The Report", "Title Of Person Completing The Report", "Business Phone",
    "Business Email", "How Did The Incident Occur?", "Name Of The Location", "Is there an address for incident location?", "Incident Street address", "Agency Driver Last Name", "Agency Driver First Name", "Agency Address", "Agency City", "Agency State", "Agency Zip Code", "Agency Home Phone #", "Agency Work Phone #",
    "Agency Cell Phone #", "Agency Email", "Is This Driver An Employee?", "Job Title Of Employee", "Type Of Driver", "Agency Vehicle VIN", "Agency Vehicle Make", "Agency Vehicle Model", "Agency Vehicle License #",
    "Is This Vehicle Drivable?", "Current Location Of Vehicle", "Area Of Damage", "Estimated Repair Cost", "Was A Trailer Involved?", "Trailer Year", "Trailer Make", "Trailer Model", "Trailer Licence #",
    "Trailer Area Of Damage", "Current Location Of Trailer", "Estimated Repair Cost Of Trailer", "Has A Police Agency Investigated The Incident", "What Police Agency?", "Police Report #", "Agency Address",
    "Was The Agency Driver Ticketed/Arrested/Cited For Violation?", "Details Of Ticketed/Arrested/Cited For Violation", "\t Claimant Info \t",
    "How Was The Person Involved In The Accident?", "How Was The Person Involved In The Accident?", "How Was The Person Involved In The Accident?","How Was The Person Involved In The Accident?",
        "How Was The Person Involved In The Accident?", "How Was The Person Involved In The Accident?", "How Was The Person Involved In The Accident?",
        "Last Name for Business", "First Name for Business", "Business Address","Business City","Business State","Business Zip Code","Business Home Phone","Business Cell Phone","Business Work Phone",
    "Vehicle Make", "Vehicle Model", "Vehicle Year", "Area of Damage", "Is the Vehicle Drivable", "If no, what is the location of the vehicle?", "Extent of Damage", "Describe the property damage other than the Vehicle",
    "Extent of the Damage other than the vehicle", "Age of Injured Person", "Sex of Injured Person", "Was the injured person transported by paramedics?",
    "If yes, where was the injured person taken?", "Do you expect the injured person to file a claim?", "Describe the injury", "Witness Last Name",
        "Witness First Name", "Witness Address", "Witness City", "Witness State", "Witness Zip Code", "Witness Home Phone Number", "Witness Work Phone Number",
    "Witness Cell Phone Number", "Witness to Accident", "What is the Witness Relation to injured person or property owner", " Did the witness make any statements",
    "If yes, what did the witness say", "Where was the witness when the accident occurred", "Was the driver of the agency vehicle conducting agency business",
    "What street was the agency driver on", "What street was the other driver traveling", "What direction was the agency driver traveling", "What direction was the other driver traveling",
    "Weather Condition", "diagram image"];

    const handleDelete = async (e, vehicle_accident_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure? This action cannot be undone.");
        if (result) {
            fetch('http://127.0.0.1:5000/fvsra/vehicleAccidentReport/' + vehicle_accident_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Vehicle Accident Report #" + vehicle_accident_id + " Deleted");
                window.location.reload(false);
            })
        }
    }

    function getCSVData(row) {
        let buffer = [];
        row.forEach((row) => {
            let reportingDate = row.Reporting_Date;
            let reportingTime = row.Reporting_Time;
            if (reportingDate !== "") {
                reportingDate = moment.utc(row.Reporting_Date).format('MM/DD/YYYY');
            }
            if (reportingTime !== "") {
                reportingTime = moment(row.Reporting_Time, 'HH:mm:ss').format('h:mm A');
            }
            buffer.push([row.vehicle_accident_id , row.Name_of_the_Agency , moment.utc(row.Todays_Date).format('MM/DD/YYYY') , moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'),
                moment(row.Time_of_Incident, 'HH:mm:ss').format('h:mm A'),row.Name_of_the_person_Completing_the_report ,
                row.Title_Of_Person_Completing_the_report, row.Business_Phone, row.Business_Email, row.How_did_the_incident_Occur, row.Name_of_the_location,
                row.Address_Incident_Location, row.Incident_Street_Address, row.Incident_City, row.Incident_State, row.Incident_Zip_Code,
                row.Incident_Location, row.Primary_Location, row.Was_the_agency_vehicle_Occupied, row.Agency_Driver_Last_Name, row.Agency_Driver_First_Name,
                row.Agency_Driver_Address, row.Agency_Driver_City, row.Agency_Driver_State, row.Agency_Driver_Zip_Code,
                row.Agency_Driver_Home_Phone_Number, row.Agency_Driver_Work_Phone_Number, row.Agency_driver_Cell_phone,
                row.Agency_driver_Email_Address, row.is_this_driver_an_employee, row.if_yes_enter_job_title, row.Identify_type_of_driver,
                row.Agency_vehicle_VIN, row.Agency_vehicle_Make, row.Agency_vehicle_Model, row.Agency_vehicle_License_Number,
                row.Is_this_vehicle_drivable, row.If_no_provide_current_location_of_vehicle, row.Area_of_damage, row.Estimated_repair_cost,
                row.was_a_trailer_involved, row.Trailer_year, row.Trailer_Make, row.Trailer_Model, row.Trailer_license_Number,
                row.Trailer_area_of_damage, row.Current_Location_of_trailer, row.Estimated_repair_cost_of_trailer, row.Has_a_police_agency_conducted_an_investigation,
                row.What_police_agency_investigated_the_incident, row.Police_report_number, row.Was_the_agency_driver_ticketed_arrested_or_cited_for_violation,
                row.If_yes_provide_details_of_the_ticket_arrest_or_violation, row.How_was_the_person_involved_in_the_accident1_1,
                row.How_was_the_person_involved_in_the_accident1_2, row.How_was_the_person_involved_in_the_accident1_3, row.How_was_the_person_involved_in_the_accident1_4,
                row.How_was_the_person_involved_in_the_accident1_5, row.How_was_the_person_involved_in_the_accident1_6, row.How_was_the_person_involved_in_the_accident1_7,
                row.Last_Name_Or_BusinessName, row.First_name_not_necessary_for_business, row.Claimant_Address, row.Claimant_City,
                row.Claimant_state, row.Claimant_zip_code, row.Claimant_Home_phone_number, row.Claimant_work_phone_number,
                row.Claimant_Cell_phone_number, row.Claimant_vehicle_make, row.Claimant_Model, row.Claimant_vehicle_year,
                row.Claimant_Area_of_damage, row.Claimant_is_vehicle_drivable, row.Claimant_If_no_current_location_of_vehicle,
                row.Claimant_Extent_of_damage, row.Claimant_Describe_the_property_damage_other_than_vehicle, row.Claimant_Extent_of_damage_to_property_other_than_vehicle,
                row.Claimant_Age_of_injured_person, row.Claimant_Sex_of_injured_person, row.Claimant_Was_the_injured_person_transported_by_paramedics,
                row.Claimant_If_yes_where_was_the_injured_person_taken, row.Claimant_Do_you_expect_the_injured_person_to_file_a_claim,
                row.Claimant_Describe_the_injury, row.How_was_the_person_involved_in_the_accident2_1, row.How_was_the_person_involved_in_the_accident2_2,
                row.How_was_the_person_involved_in_the_accident2_3, row.How_was_the_person_involved_in_the_accident2_4,
                row.How_was_the_person_involved_in_the_accident2_5, row.How_was_the_person_involved_in_the_accident2_6,
                row.How_was_the_person_involved_in_the_accident2_7, row.Additional_claimaint_information_Last_name_or_business_name,
                row.First_name_not_necessary_for_business_form_three, row.Address_form_3, row.city_form_3, row.state_form_3,
                row.zip_code_form_3, row.Home_phone_number_form_3, row.cell_phone_number_form_3, row.work_phone_number_form_3,
                row.vehicle_make_form_3, row.vehicle_model_form_3, row.vehicle_year_form_3, row.Area_of_damage_form_3,
                row.Is_vehicle_driveable_form_3, row.If_no_current_location_of_vehicle_form_3, row.Extent_of_damage_form_3,
                row.Describe_the_property_damage_other_than_vehicle_form_3, row.Extent_of_damage_to_property_other_than_vehicle_form_3,
                row.Age_of_injured_person_form_4, row.Sex_of_injured_person_form_3, row.Was_the_injured_person_transported_by_paramedics_form_4,
                row.If_yes_where_was_the_injured_person_taken_form_4, row.Do_you_expect_the_injured_person_to_file_a_claim_form_4,
                row.Describe_the_injury_form_4, row.Witness_Last_name, row.Witness_first_name, row.Witness_Address, row.Witness_city,
                row.Witness_state, row.Witness_Zip_code, row.Witness_Home_phone_number, row.Witness_work_phone_number, row.Witness_cell_phone_number,
                row.Witness_to_accident, row.Witness_Relation_to_injured_person_or_property_owner, row.Witness_Did_witness_make_any_statements,
                row.Witness_If_yes_what_did_witness_said, row.Where_was_witness_when_the_accident_occurred, row.Was_the_driver_of_the_agency_vehicle_conducting_agency_business,
                row.What_street_was_the_agency_driver_on_form_4, row.What_street_was_the_other_driver_driving_on, row.What_direction_was_the_agency_driver_traveling,
                row.What_direction_was_the_other_driver_traveling, row.Weather_condition, row.diagramImg])
        })
            return buffer;
        }
    return (
    <div className={"viewVehicleAccidentReport"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {reports && <div>
            <div>
                <h2 className="viewVehicleAccidentReportHeader">View Vehicle Accident Reports</h2>
                <button type={"button"}><CSVLink style={{ textDecoration: 'none', color:'black' }} filename={"vehicle-accident-report.csv"} headers={header} data={(getCSVData(reports))} target="_blank" >Export To Excel</CSVLink></button>

            </div>
            <div>
                <table className="tableMinorInjuryLog">
                    <thead>
                    <tr>
                        <th>Property Loss ID</th>
                        <th>Date Of Incident</th>
                        <th>Name Of Person Completing The Report</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((reports) => (
                        <tr key={reports.vehicle_accident_id}>
                            <td>{reports.vehicle_accident_id}</td>
                            <td>{moment.utc(reports.Date_of_Incident).format('MM/DD/YYYY')}</td>
                            <td>{reports.Name_of_the_person_Completing_the_report}</td>
                            <td><button type="button" onClick={(e) => handleDelete(e, reports.vehicle_accident_id)}>Delete {reports.vehicle_accident_id}</button>
                                <button type={"button"}>Edit {reports.vehicle_accident_id}</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>}
    </div>
);
}

export default viewVehicleAccidentReport;