import "./css/employee.css";
import background from "./images/bg-01.jpg";
const Employee = () => {
    return ( 
        <div className="limiter">
        <div className="container-login100" style={{backgroundImage: {background}}}>
          <div className="wrap-login100_2">
            <div className="login100-form validate-form">
              <span className="login100-form-title p-b-34 p-t-27">
                <div className="greenUnderline">Select a Form to Create</div>
              </span>
              <div className="tempNote">
                <span style={{color: 'red', textDecoration: 'underline'}}>
                  Note
                </span>
                <br />
                The only functional forms are:
                <br />
                -Minor Injury Log
                <br />
                -Property Loss
              </div>
              <div className="temp222">
                <div className="container-stack">
                  <a href="form/MinorInjury">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Minor Injury Log</div>
                      </div>
                    </div>
                  </a>
                  <a href="/form/AccidentReport">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Accident/Incident</div>
                      </div>
                    </div>
                  </a>
                  <a href="form/VehicleReport">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Vehicle Accident</div>
                      </div>
                    </div>
                  </a>
                  <a href="form/PropertyReport">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Property Loss</div>
                      </div>
                    </div>
                  </a>
                  <a href="form/EmployeeInjury">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Employee Injury</div>
                      </div>
                    </div>
                  </a>
                  <a href="form/NotificationReport">
                    <div className="wrap-login100">
                      <div className="container-login100-form-btn">
                        <div className="formtext">Notification of Injury to Employer</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
     );
}
 
export default Employee;