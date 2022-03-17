import UseFetch from "../UseFetch";
import {CSVLink} from "react-csv";

const viewPropertyLossReport = () => {

    const { data: reports, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/propertyLossReport');

    function handleDelete(e, property_loss_id) {
        e.preventDefault();

        fetch('http://127.0.0.1:5000/fvsra/propertyLossReport/' + property_loss_id, {
            method: 'DELETE'
        }).then(() => {
            alert("Property Loss Entry:" + property_loss_id + " Deleted");
            window.location.reload(false);
        })
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
                <table className="tablePropertyLossReport">
                    <thead>
                    <tr>
                        <th>Property Loss ID</th>
                        <th>Today's Date</th>
                        <th>Date Of Incident</th>

                    </tr>
                    </thead>
                </table>
            </div>
        </div>}
    </div>
);
}

export default viewPropertyLossReport;