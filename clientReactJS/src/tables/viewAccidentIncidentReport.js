import UseFetch from "../UseFetch";
import {confirm} from "react-confirm-box";
import {CSVLink} from "react-csv";
import moment from "moment";

const viewAccidentIncidentReport = () => {

    const { data: reports, isPending, error} = UseFetch('https://api.foxvalleyspecialrec.com/fvsra/accidentIncidentReport');

    let header = ["Accident Incident ID", "Agency Name", "Today's Date", "Date Of Incident", "Time Of Incident", "Name Of Person Completing The Report", "Title Of Person Completing The Report", "Business Phone",
        "Business Email", "How did the incident occur?", "Name of the location", "Is there an address for incident location?", "Street address", "City", "State", "Zip Code", "Location", "Primary location", "\t Bodily Injury \t",
        "Was a person injured?", "Last name", "First name", "Address", "City", "State", "Zip code", "Home phone #", "Work phone #", "Cell phone #", "Age", "Sex", "Is the injured person an agency volunteer?",
        "Describe the injury", "Did injured person make any statements?", "If yes, what did injured person say?", "Was first aid administered?", "Name and position of person who administered first aid",
        "What first aid was given?", "Did first aid involve AED and/or CPR?", "Were paramedic services offered?", "Were police called?", "Name of police department", "Name of officer",
        "Do you expect this person to submit a claim?", "\t Property Damage \t" ,"Was property damaged as a result of this accident/incident?", "If yes, how was the person involved in the accident/incident?", "Last name (or business name)",
        "First name (not necessary if business name)", "Address", "City", "State", "Zip Code", "Phone number", "Describe the property damage", "\tWitness Info\t", "Last name", "First name", "Address", "City",
        "State", "Zip Code", "Phone number", "Did witness make any statements?", "If yes, what did witness say?", "Where was witness when the accident/incident occurred?"];

    const handleDelete = async (e, accident_incident_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure? This action cannot be undone.");
        if (result) {
            fetch('https://api.foxvalleyspecialrec.com/fvsra/accidentIncidentReport/' + accident_incident_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Accident/Incident Report #" + accident_incident_id + " Deleted");
                window.location.reload(false);
            })
        }
    }

    function getCSVData(row) {
        let buffer = [];
        row.forEach((row) => {
            buffer.push([row.accident_incident_id, row.Agency_Name, moment.utc(row.Todays_Date).format('MM/DD/YYYY'), moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'), moment(row.Time_of_incident, 'HH:mm:ss').format('h:mm A'),
            row.Name_of_the_person_Completing_the_report, row.Title_Of_Person_Completing_the_report, row.Business_Phone, row.Business_Email, row.How_did_the_incident_Occur, row.Name_of_the_location, row.Is_there_an_address_for_incident_Location,
            row.Street_Address, row.City, row.State, row.Zip_code, row.Location, row.Primary_Location, "", row.Was_a_person_injured, row.Last_name_employee_injury, row.First_name_employee_injury, row.Address_employee_injury, row.city_employee_injury,
            row.State_employee_injury, row.Zip_code_employee_injury, row.Home_phone_Number, row.Work_phone_number, row.Cell_phone_number, row.Age, row.Sex, row.Is_injured_person_an_agency_volunteer, row.Describe_the_injury,
            row.Did_injured_person_make_any_statements, row.If_yes_what_did_injured_person_say, row.was_first_aid_administered, row.Name_and_position_of_person_who_administered_the_First_aid, row.What_first_aid_was_given,
            row.Did_first_aid_involve_AED_and_or_CPR, row.Were_paramedic_services_offered, row.Were_Police_Called, row.Name_of_the_police_department, row.Name_of_the_officer, row.did_you_expect_this_person_submit_a_claim, "",
            row.Was_Property_Damaged_As_A_Result_Of_This_AccidentOrIncident, row.If_Yes_How_Was_The_Person_Involved_In_The_AccidentOrIncident, row.last_name_Property_damage, row.first_name_Property_damage, row.Address_Property_damage,
            row.city_Property_damage, row.state_Property_damage, row.zip_code_Property_damage, row.phone_num_Property_Damage, row.Describe_the_property_damage, "", row.Last_name_witness_information, row.first_name_witness_information,
            row.Address_witness_information, row.City_witness_information, row.State_witness_information, row.zip_code_witness_information, row.phone_number_witness_information, row.did_Witness_make_any_statements, row.If_yes_what_did_witness_say,
            row.Where_was_witness_when_the_accident])
        })
        return buffer;
    }

    return (
        <div className={"viewAccidentIncidentReport"}>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {reports && <div>
                <div>
                    <h2 className="viewNotificationOfInjuryToEmployerReportHeader">View Accident/Incident Reports</h2>
                    <button type={"button"}><CSVLink style={{ textDecoration: 'none', color:'black' }} filename={"accident-incident-report.csv"} headers={header} data={(getCSVData(reports))} target="_blank" >Export To Excel</CSVLink></button>

                </div>
                <div>
                    <table className="tableMinorInjuryLog">
                        <thead>
                        <tr>
                            <th>Accident Incident ID</th>
                            <th>Date Of Incident</th>
                            <th>Employee's Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reports.map((reports) => (
                            <tr key={reports.accident_incident_id}>
                                <td>{reports.accident_incident_id}</td>
                                <td>{moment.utc(reports.Date_of_Incident).format('MM/DD/YYYY')}</td>
                                <td>{reports.Name_of_the_person_Completing_the_report}</td>
                                <td>
                                    <button type="button" onClick={(e) => handleDelete(e, reports.accident_incident_id)}>Delete {reports.accident_incident_id}</button>
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

export default viewAccidentIncidentReport;