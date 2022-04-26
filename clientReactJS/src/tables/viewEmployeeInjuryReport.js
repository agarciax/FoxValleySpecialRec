import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewEmployeeInjuryReport = () => {

    const { data: reports, isPending, error} = UseFetch('https://api.foxvalleyspecialrec.com/fvsra/employeeInjuryReport');
    let header = ["Employee Injury ID", "Agency Name", "Today's Date", "Date of Incident", "Time Of Incident", "Name Of Person Completing the Report", "Title of person completing Report", "Business Phone",
        "Business Email", "Incident Occur and what property was damaged", "Name of location", "Street Address Incident Location", "State Incident Location","City Incident Location", "Incident Zip Code", "Location Damage",
    "Primary Location", "Employer FEIN", "Employer Workdays", "Employee Doing", "Incident Details", "Employee Last Name", "Employee First Name", "Employee Street Address", "Employee City", "Employee State",
    "Employee Zip Code", "Employee Home Phone", "Employee Work Phone", "Employee Cell Phone", "Employee Best Number", "Employee Email", "Employee Social Security Number", "Employee Date of Birth",
    "Employee Gender", "Employee Marital Status", "Employee Dependents", "Employee English", "Employee Wage", "Employee Job Title", "Employee Status", "Employee Date Hired", "Employee Tenure",
    "Employee Time Began", "Employee Last Date Worked", "Employee Date Death", "Premises", "Injury or Illness", "Describe Injury or Illness", "Object Harmed", "Medical Attention",
    "Treatment", "Emergency Room", "Hospitalized", "Hospital Name", "Hospital Address", "Hospital City", "Hospital State", "Hospital Zip", "Hospital Phone"];

    const handleDelete = async (e, employee_injury_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure? This action cannot be undone.");
        if (result) {
            fetch('https://api.foxvalleyspecialrec.com/fvsra/notificationOfInjuryToEmployerReport/' + employee_injury_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Employee Injury Report #" + employee_injury_id + " Deleted");
                window.location.reload(false);
            })
        }
    }

    function getCSVData(row) {
        let buffer = [];
        row.forEach((row) => {
            let reportingDate = row.Reporting_Date;
            let reportingTime = row.Reporting_Time;
            if(reportingDate !== ""){
                reportingDate = moment.utc(row.Reporting_Date).format('MM/DD/YYYY');
            }
            if(reportingTime !== ""){
                reportingTime = moment(row.Reporting_Time, 'HH:mm:ss').format('h:mm A');
            }
            buffer.push([row.employee_injury_id, row.Agency_name, moment.utc(row.Todays_Date).format('MM/DD/YYYY'),moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'),
                moment(row.Time_of_Incident, 'HH:mm:ss').format('h:mm A'),
                row.Name_of_person_completing_report, row.Title_of_person_completing_report, row.Business_phone, row.Business_email_address,
                row.How_did_the_incident_occur_provide_online_online_description, row.Name_of_the_location, row.Is_there_an_address_for_this_location_if_yes_provide_address, row.Street_address,
                row.city, row.state, row.Zipcode, row.location, row.Primary_location, row.Employers_FEIN, row.Did_the_employee_miss_more_than_three_scheduled_workdays,
            row.What_was_the_employee_doing_when_the_accident_occurred, row.How_did_the_incident_occur_provide_detail_description, row.Employee_last_name, row.Employee_first_name,
            row.Employee_Address, row.Employee_city, row.Employee_state, row.Employee_Zip_code, row.Home_phone, row.Work_phone, row.Cell_phone, row.Best_number_to_contact_employee,
                row.Email, row.Social_security_number, row.Date_of_birth, row.Gender, row.Marital_status, row.Number_of_dependents, row.Does_employee_speak_English, row.Average_weekly_wages,
                row.Job_title_occupation, row.What_is_the_employees_employment_status, row.Date_hire, row.What_is_the_employees_tenure, row.Time_employee_began_work_on_day_of_incident,
                row.Last_date_employee_worked_prior_to_date_of_incident, row.If_the_employee_died_as_a_result_the_accident_death_date, row.Did_the_incident_occur_on_agency_premises, row.Injury_or_illness,
            row.Describe_the_injury_or_illness, row.What_object_or_substance_if_any_directly_harmed_the_employee, row.Did_the_injured_employee_seek_medical_attention, row.If_yes_was_the_treatment_given_away_from_the_worksite,
                row.Was_the_employee_treated_in_an_emergency_room, row.Was_the_employee_hospitalized_overnight_as_an_inpatient, row.Name_of_treating_physician_health_care_provider_emergency_room,
                row.Address_page_2, row.City_page_2, row.State_page_2, row.Zip_Code_page_2, row.Phone_number_page_2] )
        })
        return buffer;
    }
    return (
        <div className={"viewEmployeeInjuryReport"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {reports && <div>
                <div>
                    <h2 className="viewEmployeeInjuryHeader">View Notification Of Injury To Employer Reports</h2>
                    <button type={"button"}><CSVLink style={{ textDecoration: 'none', color:'black' }} filename={"employee-injury-report.csv"} headers={header} data={(getCSVData(reports))} target="_blank" >Export To Excel</CSVLink></button>

                </div>
                <div>
                    <table className="tableMinorInjuryLog">
                        <thead>
                        <tr>
                            <th>Employee Injury Report</th>
                            <th>Date Of Incident</th>
                            <th>Employee's Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reports.map((reports) => (
                            <tr key={reports.employee_injury_id}>
                                <td>{reports.employee_injury_id}</td>
                                <td>{moment.utc(reports.Date_of_Incident).format('MM/DD/YYYY')}</td>
                                <td>{reports.Employee_Name}</td>
                                <td><button type="button" onClick={(e) => handleDelete(e, reports.employee_injury_id)}>Delete {reports.employee_injury_id}</button>
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

export default viewEmployeeInjuryReport;