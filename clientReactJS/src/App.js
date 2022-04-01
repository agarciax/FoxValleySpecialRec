import Employee from './Employee';
import LoginPage from './IMSindex';
import MinorInjury from './forms/MinorInjuryLog';
import AccidentReport from './forms/AccidentIncidentReport';
import EmployeeInjury from './forms/EmployeeInjuryReport';
import NotificationReport from './forms/NotificationOfInjuryReport';
import PropertyReport from './forms/PropertyLossReport';
import VehicleReport from './forms/VehicleAccidentReport';
import Admin from "./Admin";
import ViewMinorInjury from './tables/viewMinorInjuryLog';
import ViewPropertyLoss from './tables/viewPropertyLossReport';
import PrivateRoute from "./PrivateRoute";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ViewNotificationOfInjuryToEmployer from "./tables/viewNotificationOfInjuryToEmployerReport";

function App() {
  return (
   <div>
     <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/FoxValleySpecialRec" element={<Employee />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>

          <Routes>
            <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
            />
          </Routes>

          <Routes>
            <Route path="/form/AccidentReport" element={<AccidentReport />} />
          </Routes>
          <Routes>
            <Route path="/form/MinorInjury" element={<MinorInjury />} />
          </Routes>
          <Routes>
            <Route path="/form/EmployeeInjury" element={<EmployeeInjury />} />
          </Routes>
          <Routes>
            <Route path="/form/NotificationReport" element={<NotificationReport />} />
          </Routes>
          <Routes>
            <Route path="/form/PropertyReport" element={<PropertyReport />} />
          </Routes>
          <Routes>
            <Route path="/form/VehicleReport" element={<VehicleReport />} />
          </Routes>
          <Routes>
            <Route path="/form/viewMinorInjury" element={<ViewMinorInjury />} />
          </Routes>
          <Routes>
            <Route path={"/form/viewPropertyLossReport"} element={<ViewPropertyLoss />}/>
          </Routes>
          <Routes>
            <Route path={"/form/viewNotificationOfInjuryToEmployerReport"} element={<ViewNotificationOfInjuryToEmployer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
