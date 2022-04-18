import { Link } from "react-router-dom";
import "./css/admin.css"
import background from "./images/bg-01.jpg";



const Settings = () => {




    return (


        <div className="limiter">


            <div className="AD_container-login100" style={{backgroundImage: `url(${background})`}} >

                <Link to="/admin">
                    <button className="LogoutButton"  >
                        Return
                    </button>
                </Link>

                <div className="AD_grid-container">
                    <div className="AD_item1"><div className="AD_wrap-login-header">Settings</div></div>
                    <div className="SET_item2">
                        <button  className="AD_wrap-login100">Account Settings</button>

                        <div id="myDropdown" class="AD_dropdown-content">
                            <a href="/admin/settings/createAdmin">Create New Admin Account</a>
                            <a href="/admin/settings/deleteAdmin">Delete Admin Account</a>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Settings;