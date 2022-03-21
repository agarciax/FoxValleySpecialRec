import background from "./images/bg-01.jpg";
import { Link } from "react-router-dom";
import "./css/admin.css"



const Admin = () => {
    
  function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function dropDown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.AD_wrap-login100')) {
        var dropdowns = document.getElementsByClassName("AD_dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
  
  return ( 
        
        
        <div className="limiter">
        

        <div className="AD_container-login100" style={{backgroundImage: `url(${background})`}}>
          
          <Link to="/Login"> 
          <button className="LogoutButton" >
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
                <a href="#home">Accident/Incident 01</a>
                <a href="#about">Vehicle Accident 02</a>
                <a href="/form/viewPropertyLossReport">Property Loss 03</a>
                <a href="#about">Employee Injury 04</a>
                <a href="#about">Employee Injury 04E</a>
              </div>
            </div>

            <div className="AD_item4">
              <button  className="AD_wrap-login100">Security</button>
              <div id="myDropdown3" className="AD_dropdown-content">
                <a href="#home">Settings</a>
                <a href="#about">Notifications</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     );
}
 
export default Admin;