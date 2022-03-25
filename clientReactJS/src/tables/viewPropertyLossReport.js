import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewPropertyLossReport = () => {

    const { data: reports, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/propertyLossReport');
    let header = ["Property Loss ID", "Agency Name", "Today's Date", "Date Of Incident", "Time Of Incident", "Name Of Person Completing The Report", "Title Of Person Completing The Report", "Business Phone",
    "Incident Description And Property Damage", "Name Of Location", "Business Email", "Street Address Incident Location", "City Incident Location", "State Incident Location", "Zip Code Incident Location",
    "Location", "Primary Location", "Estimate Of Loss", "Contact Person Of Facility", "Contact Email Of Facility", "Contact Phone Of Facility", "Was Damage Caused By 3rd Party", "Person Responsible Name",
    "Person Responsible Street Address", "Person Responsible City", "Person Responsible State", "Person Responsible Zip Code", "Police Conducted Investigation?", "Police Agency That Investigated",
    "Police Report Number", "Criminal Charges"];

    const handleDelete = async (e, property_loss_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure?");
        if (result) {
            fetch('http://127.0.0.1:5000/fvsra/propertyLossReport/' + property_loss_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Property Loss Entry:" + property_loss_id + " Deleted");
                window.location.reload(false);
            })
        }
    }

    function getCSVData(row) {
        let buffer = [];
        row.forEach((row) => {
            buffer.push([row.property_loss_id, row.Name_of_the_Agency, moment.utc(row.Todays_Date).format('MM/DD/YYYY'),
                moment.utc(row.Date_of_Incident).format('MM/DD/YYYY'), moment(row.Time_of_Incident, 'HH:mm:ss').format('h:mm A'),
                row.Name_of_the_person_Completing_the_report, row.Title_Of_Person_Completing_the_report, row.Business_Phone, row.Business_Email,
                row.How_did_the_incident_occur_and_what_property_was_damaged, row.Name_of_location, row.Street_Address_Incident_Location, row.State_Incident_Location,
                row.City_Incident_Location, row.Zip_Code, row.Location_Specify, row.Primary_Location, row.Estimate_of_Loss, row.Contact_Person_Facility,
                row.Contact_Person_Email, row.Contact_Person_Phone_Number, row.Damage_Third_Party, row.Person_Responsible_Name, row.Person_Responsible_Street_Address,
                row.Person_Responsible_City, row.Person_Responsible_State, row.Zip_Code_Person_Responsible, row.Police_Investigation_Yes_No_Unknown,
                row.What_Police_Agency, row.Police_Report_Number, row.Were_Criminal_Charges])
        })
        return buffer;
    }

    return (
    <div className={"viewPropertyLossReport"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {reports && <div>
            <div>
                <h2 className="viewPropertyLossReportHeader">View Property Loss Reports</h2>
                <button type={"button"}><CSVLink style={{ textDecoration: 'none', color:'black' }} filename={"property-loss-report.csv"} headers={header} data={(getCSVData(reports))} target="_blank" >Export To Excel</CSVLink></button>

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
                        <tr key={reports.property_loss_id}>
                            <td>{reports.property_loss_id}</td>
                            <td>{moment.utc(reports.Date_of_Incident).format('MM/DD/YYYY')}</td>
                            <td>{reports.Name_of_the_person_Completing_the_report}</td>
                            <td><button type="button" onClick={(e) => handleDelete(e, reports.property_loss_id)}>Delete {reports.property_loss_id}</button>
                                <button type={"button"}>Edit {reports.property_loss_id}</button>
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

export default viewPropertyLossReport;