import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewNotificationOfInjuryToEmployerReport = () => {

    const { data: reports, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/notificationOfInjuryToEmployerReport');
    let header = ["Notification Of Injury To Employer ID", "Employee's Name", "Date Of Incident", "Time Of Incident", "Specific Location", "Reporting First Time", "Reporting Date",
        "Reporting Time", "Reported_To", "Describe How Injury Occurred", "People Present At Injury", "Body Parts Injured", "Seek_Medical_Attention",
    "Seek_Treatment", "Injured_Previously", "Describe_Which_Part_Was_Injured", "Where_Treatment_Received", "Employee_Signature", "Signature Date"];

    const handleDelete = async (e, employee_injury_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure?");
        if (result) {
            fetch('http://127.0.0.1:5000/fvsra/notificationOfInjuryToEmployerReport/' + employee_injury_id, {
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
            buffer.push([row.employee_injury_id, row.Employee_Name, moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'),
                moment(row.Time_of_Incident, 'HH:mm:ss').format('h:mm A'),
                row.Specific_Location, row.Reporting_First_Time, moment.utc(row.Reporting_Date).format('MM/DD/YYYY'),
                moment(row.Reporting_Time, 'HH:mm:ss').format('h:mm A'),
                row.Reported_To, row.Describe_How_Injury_Occurred, row.People_Present_At_Injury, row.Body_Parts_Injured,
                row.Seek_Medical_Attention, row.Seek_Treatment, row.Injured_Previously, row.Describe_Which_Part_Was_Injured, row.Where_Treatment_Received, row.Employee_Signature,
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
                                <button type={"button"}>Edit {reports.employee_injury_id}</button>
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