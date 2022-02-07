'use strict';
var vehicleAccident = require('../model/vehicleAccidentAppModel.js');

exports.list_all_vehicleAccidents = function (req, res) {
    console.log("LIST ALL VEHICLE ACCIDENTS");
    vehicleAccident.getAllVehicleAccidents(function (err, item) {
        console.log('controller');
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_vehicleAccident = function (req, res) {
    vehicleAccident.getVehicleAccidentByID(req.params.vehicle_accident_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createVehicleAccident = function (req, res) {
    console.log("POST CREATED");
    var new_vehicleAccident = new vehicleAccident(req.body);
    console.log( vehicleAccident );
    //handles null error
    if (!new_vehicleAccident.Name_of_the_Agency) {
        res.status(400).send({error: true, message: 'Please provide vehicle accident'});
    } else {
        vehicleAccident.createVehicleAccident(new_vehicleAccident, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deleteVehicleAccident = function (req, res) {
    vehicleAccident.remove(req.params.vehicle_accident_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Item successfully deleted'});
    });
};


