'use strict';
var propertyLoss = require('../model/propertyLossAppModel.js');

exports.list_all_propertyLosses = function (req, res) {
    console.log("LIST ALL EMPLOYEE INJURY REPORTS");
    propertyLoss.getAllPropertyLossReports(function (err, item) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(err);
        //console.log('res', task);
        res.send(item);
    });
};
exports.read_a_propertyLossReport = function (req, res) {
    propertyLoss.getPropertyLossByID(req.params.property_loss_id, function (err, item) {
        if (err) res.send(err);
        res.json(item);
    });
};
exports.createPropertyLossReport = function (req, res) {
    console.log("POST CREATED");
    var new_propertyLoss = new propertyLoss(req.body);
    console.log( new_propertyLoss );
    //handles null error
    if (false) {
        res.status(400).send({error: true, message: 'Please provide minor incident'});
    } else {
        propertyLoss.createPropertyLossReport(new_propertyLoss, function (err, item) {
            if (err) res.send(err);
            res.json(item);
        });
    }
};
exports.deletePropertyLoss = function (req, res) {
    propertyLoss.remove(req.params.property_loss_id, function (err) {
        if (err) res.send(err);
        res.json({message: 'Property loss report is successfully deleted'});
    });
};
