'use strict';

module.exports = function (app) {
    var minorLogList = require('../controller/minorLogAppController'); //Finished W/ Front/Back End Connection
    app.route('/fvsra/minorInjuryLog')
        .get(minorLogList.list_all_minorIncidents)
        .post(minorLogList.createMinorIncident)
    app.route('/fvsra/minorInjuryLog/:minor_injury_id')
        .get(minorLogList.read_a_minorIncident)
        .delete(minorLogList.deleteMinorIncident)

    var form01 = require('../controller/accidentIncidentAppController') //Matt is working on the Front/Back End Connection
    app.route('/fvsra/accidentIncidentReport')
        .get(form01.list_all_accidentIncidentReports)
        .post(form01.createAccidentIncidentReport)
    app.route('/fvsra/accidentIncidentReport/:accident_incident_id')
        .get(form01.read_a_accidentIncidentReport)
        .delete(form01.deleteAccidentIncidentReport)

    var form02 = require('../controller/vehicleAccidentAppController'); //Josh is working on the Front/Back End Connection
    app.route('/fvsra/vehicleAccidentReport')
        .get(form02.list_all_vehicleAccidents)
        .post(form02.createVehicleAccident)
    app.route('/fvsra/vehicleAccidentReport/:vehicle_accident_id')
        .get(form02.read_a_vehicleAccident)
        .delete(form02.deleteVehicleAccident)

    var form03 = require('../controller/propertyLossAppController'); //Finished W/ Front/Back End Connection
    app.route('/fvsra/propertyLossReport')
        .get(form03.list_all_propertyLosses)
        .post(form03.createPropertyLossReport)
    app.route('/fvsra/propertyLossReport/:property_loss_id')
        .get(form03.read_a_propertyLossReport) //Not Tested
        .delete(form03.deletePropertyLoss)

    var form04 = require('../controller/employeeInjuryReportAppController');
    // todoList3 Routes
    app.route('/fvsra/employeeInjuryReport')
        .get(form04.list_all_employeeInjuryReports)
        .post(form04.createEmployeeInjuryReport) //Not Tested
    app.route('/fvsra/employeeInjuryReport/:employee_injury_id')
        .get(form04.read_a_employeeInjuryReport)
        .delete(form04.deleteEmployeeInjuryReport)

    var form04E = require('../controller/notificationOfInjuryToEmployerReportAppController')
    app.route('/fvsra/notificationOfInjuryToEmployerReport')
        .get(form04E.list_all_notificationOfInjurys)
        .post(form04E.createNotificationOfInjuryReport) //Not Tested
    app.route('/fvsra/notificationOfInjuryToEmployerReport/:employee_injury_id')
        .get(form04E.read_a_notificationOfInjury)
        .delete(form04E.deleteNotificationOfInjuryReport) //Not Tested

    var login = require('../controller/authenticationAppController')
    app.route('/fvsra/auth')
        .get(login.list_all_users) //Not Tested
        .post(login.createLoginInfo) //Not Tested
    app.route('/fvsra/auth/:user_id')
        .get(login.read_loginInfo) //Not Tested
        .delete(login.deleteLoginInfo) //Not Tested

};