import UseFetch from "../UseFetch";
import { CSVLink } from 'react-csv'

const viewMinorInjuryLog = () => {

    // let logs, isPending, error;
    //
    // let p = new Promise((resolve, reject))

    const { data: logs, isPending, error} = UseFetch('http://127.0.0.1:5000/fvsra/minorInjuryLog');


    function handleDelete(e, minor_injury_id) {
        e.preventDefault();

        fetch('http://127.0.0.1:5000/fvsra/minorInjuryLog/' + minor_injury_id, {
            method: 'DELETE'
        }).then(() => {
            alert("Minor Injury Entry:" + minor_injury_id + " Deleted");
            window.location.reload(false);
        })

    }

    function handleExport(e) {
        e.preventDefault();

        return JSON.stringify(csvData)
    }

    const csvData = [
        ["Minor Injury ID", "Date", "Time", "Name Of Injury", "Injury Location", "Treatment", "How Injury Occurred", "Treatment", "How Injury Occurred", "Facility/Location Where Injury Occurred", "Full Name Of Staff Who Noticed Guardian"]
    ];


    return (
    <div className="theHeader">
        <div>
            <div>
                <h2 className="viewMinorInjuryLogHeader">View Minor Injury Entries</h2>
                <CSVLink data={JSON.stringify(logs)}>Export To Excel</CSVLink>
            </div>
            {logs &&
            <div>
                <table className="tableMinorInjuryLog">
                    <thead>
                        <tr>
                            <th>Minor Injury ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name Of Injury</th>
                            <th>Injury Location</th>
                            <th>Treatment</th>
                            <th>How Injury Occurred</th>
                            <th>Facility/Location Where Injury Occurred</th>
                            <th>Full Name Of Staff Who Noticed Guardian</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {logs.map((logs) => (
                        <tr key={logs.minor_injury_id}>
                            <td>{logs.minor_injury_id}</td>
                            <td>{logs.injury_date}</td>
                            <td>{logs.injury_time}</td>
                            <td>{logs.name_of_injured}</td>
                            <td>{logs.injury_location}</td>
                            <td>{logs.treatment}</td>
                            <td>{logs.how_injury_occurred}</td>
                            <td>{logs.facility_where_injury_occurred}</td>
                            <td>{logs.full_name_of_staff}</td>
                            <td><button type="button" onClick={(e) => handleDelete(e, logs.minor_injury_id)}>Delete {logs.minor_injury_id}</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div> }
        </div>
    </div>
);
}

export default viewMinorInjuryLog;