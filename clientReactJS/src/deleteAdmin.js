import UseFetch from "./UseFetch";
import moment from 'moment';
import { confirm } from "react-confirm-box";

const DeleteAdmin = () => {

    const { data: logs, isPending, error} = UseFetch('http://127.0.0.1:5000');

    const handleDelete = async (e, user_id) => {
        e.preventDefault();
        const result = await confirm("Are you sure? This action cannot be undone.");
        if (result) {
            fetch('http://127.0.0.1:5000/fvsra/auth' + user_id, {
                method: 'DELETE'
            }).then(() => {
                alert("Account:" + user_id + " Deleted");
                window.location.reload(false);
            })
            return;
        }
    }



    return (
        <div className="theHeader">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {logs &&
            <div>
                <div>
                    <h2 className="viewMinorInjuryLogHeader">List of Accounts</h2>
                </div>

                <div>
                    <table className="tableMinorInjuryLog">
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>

                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {logs.map((logs) => (
                            <tr key={logs.user_id}>
                                <td>{logs.user_id}</td>
                                 <td>{logs.username}</td>

                                <td><button type="button" onClick={(e) => handleDelete(e, logs.user_id)}>Delete {logs.user_id}</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div> }
        </div>
    );
}

export default DeleteAdmin;