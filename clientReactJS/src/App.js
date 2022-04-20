import Employee from './Employee';
import LoginPage from './IMSindex';
import DeleteAdmin from "./deleteAdmin";
import MinorInjury from './forms/MinorInjuryLog';
import AccidentReport from './forms/AccidentIncidentReport';
import EmployeeInjury from './forms/EmployeeInjuryReport';
import NotificationReport from './forms/NotificationOfInjuryReport';
import PropertyReport from './forms/PropertyLossReport';
import VehicleReport from './forms/VehicleAccidentReport';
import Admin from "./Admin";
import CreateAdmin from "./createAdmin";
import Settings from "./Settings";
import ViewMinorInjury from './tables/viewMinorInjuryLog';
import ViewPropertyLoss from './tables/viewPropertyLossReport';
import PrivateRoute from "./PrivateRoute";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import SubmissionPage from "./SubmissionPage";
import ViewNotificationOfInjuryToEmployer from "./tables/viewNotificationOfInjuryToEmployerReport";
import ViewAccidentIncident from "./tables/viewAccidentIncidentReport";



function App() {
  return (
   <div>
     <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/employee" element={<Employee />} />
          </Routes>
            <Routes>
                <Route path="/submitted" element={<SubmissionPage />} />
            </Routes>
          <Routes>
            <Route path="/FoxValleySpecialRec" element={<LoginPage />} />
          </Routes>

            <Routes>
                <Route path="/admin/settings/createAdmin" element={<CreateAdmin />} />
            </Routes>
            <Routes>
                <Route path="/admin/settings/deleteAdmin" element={<DeleteAdmin />} />
            </Routes>

          <Routes>
              <Route path="/admin" element={ <PrivateRoute> <Admin /> </PrivateRoute>}/>

              <Route path="/admin/settings" element={ <PrivateRoute> <Settings/> </PrivateRoute> }/>

              <Route path="/form/viewMinorInjury" element={ <PrivateRoute> <ViewMinorInjury /></PrivateRoute> }/>

              <Route path="/form/viewPropertyLossReport"  element={ <PrivateRoute> <ViewPropertyLoss /> </PrivateRoute> } />

              <Route path="/form/viewAccidentIncidentReport" element={ <PrivateRoute> <ViewAccidentIncident /> </PrivateRoute> } />

              <Route path="/form/viewNotificationOfInjuryToEmployerReport" element={ <PrivateRoute> <ViewNotificationOfInjuryToEmployer /> </PrivateRoute> } />

              <Route path="/admin/settings/deleteAdmin" element={<PrivateRoute> <DeleteAdmin/> </PrivateRoute>} />

              <Route path="/admin/settings/createAdmin" element={<PrivateRoute> <CreateAdmin/> </PrivateRoute>} />

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

        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
