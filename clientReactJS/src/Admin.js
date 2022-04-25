import background from "./images/bg-01.jpg";
import { Link } from "react-router-dom";
import "./css/admin.css"



const Admin = () => {

    const handleLogout = () => {
        localStorage.clear();
    };


    return (
        
        
        <div className="limiter">
        

        <div className="AD_container-login100" style={{backgroundImage: `url(${background})`}}>
          
          <Link to="/">
          <button className="LogoutButton"  onClick={handleLogout}>
            Log Out
          </button>
          </Link>

          <div className="AD_grid-container">
            <div className="AD_item1"><div className="AD_wrap-login-header">Admin Options</div></div>
            <div className="AD_item2">
              <button  className="AD_wrap-login100">Create A Form</button>
              
              <div id="myDropdown" class="AD_dropdown-content">
                  <a href="/form/MinorInjury">Minor Injury Log</a>
                  <a href="/form/AccidentReport">Accident/Incident 01</a>
                  <a href="/form/VehicleReport">Vehicle Accident 02</a>
                  <a href="/form/PropertyReport">Property Loss 03</a>
                  <a href="/form/EmployeeInjury">Employee Injury 04</a>
                  <a href="/form/NotificationReport">Employee Injury 04E</a>
              </div>
            </div>

            <div className="AD_item3">
              
              <button className="AD_wrap-login100">View Forms</button>
              <div id="myDropdown2" className="AD_dropdown-content">
                  <a href="/form/viewMinorInjury"> Minor Injury Log</a>
                <a href="/form/viewAccidentIncidentReport">Accident/Incident 01</a>
                <a href="/form/viewVehicleAccidentReport">Vehicle Accident 02</a>
                <a href="/form/viewPropertyLossReport">Property Loss 03</a>
                <a href="/form/viewEmployeeInjuryReport">Employee Injury 04</a>
                <a href="/form/viewNotificationOfInjuryToEmployerReport">Employee Injury 04E</a>
              </div>
            </div>

            <div className="AD_item4">
              <button  className="AD_wrap-login100">Security</button>
              <div id="myDropdown3" className="AD_dropdown-content">
                <a href="/admin/settings">Settings</a>
                <a href="#about">Notifications</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     );
}
 
export default Admin;