import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";
import moment from "moment";
import {confirm} from "react-confirm-box";

const viewPropertyLossReport = () => {

    const { data: reports, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/propertyLossReport');

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

    return (
    <div className={"viewPropertyLossReport"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {reports && <div>
            <div>
                <h2 className="viewPropertyLossReportHeader">View Property Loss Reports</h2>
                {/*<CSVLink filename={"minor-injury-log.csv"} data={(getCSVData())} target="_blank" >Export To Excel</CSVLink>*/}
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
                                <button type={"button"}>Export To Excel</button>
                                <button type={"button"}>Export To PDF</button>
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