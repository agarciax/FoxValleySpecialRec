import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewPropertyLossReport = () => {

    const { data: reports, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/vehicleAccidentReport');
    let header = ["Vehicle Accident ID", "Agency Name", "Today's Date", "Date Of Incident", "Time Of Incident", "Name Of Person Completing The Report", "Title Of Person Completing The Report", "Business Phone",
    "Business Email", "How Did The Incident Occur?", "Name Of The Location", "Is there an address for incident location?", "Incident Street address", "Incident City", "Incident Zip Code", "Incident Location",
    , "Was The Agency Vehicle Occupied?" ,"Agency Driver Last Name", "Agency Driver First Name", "Agency Address", "Agency City", "Agency State", "Agency Zip Code", "Agency Home Phone #", "Agency Work Phone #",
    "Agency Cell Phone #", "Agency Email", "Is This Driver An Employee?", "Job Title Of Employee", "Type Of Driver", "Agency Vehicle VIN", "Agency Vehicle Make", "Agency Vehicle Model", "Agency Vehicle License #",
    "Is This Vehicle Drivable?", "Current Location Of Vehicle", "Area Of Damage", "Estimated Repair Cost", "Was A Trailer Involved?", "Trailer Year", "Trailer Make", "Trailer Model", "Trailer Licence #",
    "Trailer Area Of Damage", "Current Location Of Trailer", "Estimated Repair Cost Of Trailer", "Has A Police Agency Investigated The Incident", "What Police Agency?", "Police Report #", "Agency Address",
    "Was The Agency Driver Ticketed/Arrested/Cited For Violation?", "Details Of Ticketed/Arrested/Cited For Violation", "\t Claimant Info \t", ];

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
            buffer.push([row.vehicle_accident_id])
        })
        return buffer;
    }

    return (
    <div className={"viewPropertyLossReport"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {reports && <div>
            <div>
                <h2 className="viewVehicleAccidentReportReportHeader">View Vehicle Accident Reports</h2>
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

export default viewPropertyLossReport;