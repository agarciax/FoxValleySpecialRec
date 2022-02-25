import background from "./images/bg-01.jpg";

import "./css/admin.css"



const Admin = () => {
    return ( 
        
        
        <div className="limiter">


        <div className="AD_container-login100" style={{backgroundImage: `url(${background})`}}>
          <div className="AD_grid-container">
            <div className="AD_item1"><div className="AD_wrap-login-header">Admin Options</div></div>
            <div className="AD_item2">
              <button onclick="dropDown()" className="AD_wrap-login100">Create A Form</button>
             

              <div id="myDropdown" className="AD_dropdown-content">
                <a href="#home">Accident/Incident Report</a>
                <a href="#about">Vehicle Accident Report</a>
                <a href="#about">Property Loss Report</a>
                <a href="#about">Employee Injury Report</a>
                <a href="#about">Notification of Injury to Employer Report</a>
              </div>
            </div>

            <div className="AD_item3">
              
              <button onclick="dropDown2()" className="AD_wrap-login100">View Forms</button>
              <div id="myDropdown2" className="AD_dropdown-content">
                <a href="#home">Accident/Incident Report</a>
                <a href="#about">Vehicle Accident Report</a>
                <a href="#about">Property Loss Report</a>
                <a href="#about">Employee Injury Report</a>
                <a href="#about">Notification of Injury to Employer Report</a>
              </div>
            </div>

            <div className="item4">
              <button onclick="dropDown3()" className="AD_wrap-login100">Security</button>
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