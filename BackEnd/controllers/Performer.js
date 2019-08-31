'use strict';

var utils = require('../utils/writer.js');
var Performer = require('../service/PerformerService');

module.exports.getAllPerformers = function getAllPerformers (req, res, next) {
  var limit = req.swagger.params['Limit'].value;
  Performer.getAllPerformers(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
