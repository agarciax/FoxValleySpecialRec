import useFetch from "../useFetch";

const viewMinorInjuryLog = () => {

    // const { data: logs, isPending, error} = useFetch('http://127.0.0.1:5000/fvsra/minorInjuryLog');


    return (
    <div className="viewMinorInjuryLog">
        <div>
            <div>
                <h2>View Minor Injury Entries</h2>
            </div>
            <div className="viewTable">
                <table>
                    <tr>
                        <td>Minor Injury ID</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Name Of Injury</td>
                        <td>Injury Location</td>
                        <td>Treatment</td>
                        <td>How Injury Occurred</td>
                        <td>Facility/Location Where Injury Occurred</td>
                        <td>Full Name Of Staff Who Noticed Guardian</td>
                    </tr>
                    <tr>
                        {/*{logs.map((logs) => (*/}
                        {/*    <td>{logs.minor_injury_id}</td>*/}
                        {/*))}*/}
                    </tr>
                </table>
            </div>
        </div>
    </div>
);
}

export default viewMinorInjuryLog;