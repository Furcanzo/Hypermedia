'use strict';

var utils = require('../utils/writer.js');
var ArtisticEvent = require('../service/ArtisticEventService');

module.exports.getAllArtisticEvents = function getAllArtisticEvents (req, res, next) {
  var limit = req.swagger.params['Limit'].value;
  ArtisticEvent.getAllArtisticEvents(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventByTitle = function getArtisticEventByTitle (req, res, next) {
  var title = req.swagger.params['title'].value;
  ArtisticEvent.getArtisticEventByTitle(title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventByType = function getArtisticEventByType (req, res, next) {
  var type = req.swagger.params['type'].value;
  var limit = req.swagger.params['Limit'].value;
  ArtisticEvent.getArtisticEventByType(type,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventByData = function getEventByData (req, res, next) {
  var data = req.swagger.params['data'].value;
  var limit = req.swagger.params['Limit'].value;
  ArtisticEvent.getEventByData(data,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEventByTitle = function updateEventByTitle (req, res, next) {
  var title2 = req.swagger.params['title'].value;
  var title = req.swagger.params['title'].value;
  ArtisticEvent.updateEventByTitle(title2,title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEventByType = function updateEventByType (req, res, next) {
  var type = req.swagger.params['type'].value;
  var title = req.swagger.params['title'].value;
  ArtisticEvent.updateEventByType(type,title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
