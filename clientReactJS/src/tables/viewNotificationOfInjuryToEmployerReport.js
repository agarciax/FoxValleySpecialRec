import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewNotificationOfInjuryToEmployerReport = () => {

    const { data: reports, isPending, error} = UseFetch(process.env.REACT_APP_FOX_VALLEY_SPECIAL_REC_ENDPOINT + '/fvsra/notificationOfInjuryToEmployerReport');
    let header = ["Notification Of Injury To Employer ID", "Employee's Name", "Date Of Incident", "Time Of Incident", "Specific Location", "Reporting First Time", "Reporting Date",
        "Reporting Time", "Reported To", "Describe How Injury Occurred", "People Present At Injury", "Body Parts Injured", "Seek_Medical_Attention",
    "Seek_Treatment", "Injured_Previously", "Describe_Which_Part_Was_Injured", "Where_Treatment_Received", "Employee_Signature", "Signature Date"];

    const handleDelete = async (e, employee_injury_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure? This action cannot be undone.");
        if (result) {
            fetch(process.env.REACT_APP_FOX_VALLEY_SPECIAL_REC_ENDPOINT + '/fvsra/notificationOfInjuryToEmployerReport/' + employee_injury_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Notification Of Injury Report #" + employee_injury_id + " Deleted");
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
            buffer.push([row.employee_injury_id, row.Employee_Name, moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'),
                moment(row.Time_of_Incident, 'HH:mm:ss').format('h:mm A'),
                row.Specific_location_of_accident, row.Are_you_reporting_the_injury_for_the_first_time_using_this_form, reportingDate, reportingTime,
                row.Reported_To, row.Describe_how_the_injury_occurred, row.Name_all_people_present_at_the_time_of_injury, row.Identify_all_body_parts_you_injured,
                row.Did_you_seek_medical_attention_on_the_date_of_the_accident, row.If_yes_where_did_you_seek_treatment, row.Have_you_injured_this_body_part_previously, row.If_yes_describe_which_body_part_and_what_the_prior_injury_was, row.If_yes_where_did_you_receive_treatment, row.Employee_Signature,
                moment.utc(row.Signature_Date).format('MM/DD/YYYY')])
        })
        return buffer;
    }

return (
    <div className={"viewNotificationOfInjuryToEmployerReport"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {reports && <div>
            <div>
                <h2 className="viewNotificationOfInjuryToEmployerReportHeader">View Notification Of Injury To Employer Reports</h2>
                <button type={"button"}><CSVLink style={{ textDecoration: 'none', color:'black' }} filename={"notification-of-injury-to-employer-report.csv"} headers={header} data={(getCSVData(reports))} target="_blank" >Export To Excel</CSVLink></button>

            </div>
            <div>
                <table className="tableMinorInjuryLog">
                    <thead>
                    <tr>
                        <th>Notification Of Injury To Employer ID</th>
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

export default viewNotificationOfInjuryToEmployerReport;