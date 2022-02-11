import Employee from './Employee';
import MinorInjury from './forms/MinorInjuryLog';
import AccidentReport from './forms/AccidentIncidentReport';
import EmployeeInjury from './forms/EmployeeInjuryReport';
import NotificationReport from './forms/NotificationOfInjuryReport';
import PropertyReport from './forms/PropertyLossReport';
import VehicleReport from './forms/VehicleAccidentReport';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <div>
     <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/Employee">
              <Employee />
            </Route>
            <Route path="/form/AccidentReport">
              <AccidentReport />
            </Route>
            <Route path="/form/MinorInjury">
              <MinorInjury />
            </Route>
            <Route path="/form/EmployeeInjury">
              <EmployeeInjury />
            </Route>
            <Route path="/form/NotificationReport">
              <NotificationReport />
            </Route>
            <Route path="/form/PropertyReport">
              <PropertyReport />
            </Route>
            <Route path="/form/VehicleReport">
              <VehicleReport />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>

    </div>
  );
}

export default App;
