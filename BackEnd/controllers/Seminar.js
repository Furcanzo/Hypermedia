'use strict';

var utils = require('../utils/writer.js');
var Seminar = require('../service/SeminarService');

module.exports.getAllSeminaries = function getAllSeminaries (req, res, next) {
  var limit = req.swagger.params['Limit'].value;
  Seminar.getAllSeminaries(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
