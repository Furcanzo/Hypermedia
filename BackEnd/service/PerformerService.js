'use strict';


/**
 * Returns all the performers
 *
 * limit Integer maximum number of performers returned (optional)
 * returns List
 **/
exports.getAllPerformers = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Details" : "A great dancer",
  "name" : "Bolle",
  "Photo gallery" : [ {
    "url" : "www.mangiami.org"
  }, {
    "url" : "www.mangiami.org"
  } ],
  "artistic event" : [ null, null ]
}, {
  "Details" : "A great dancer",
  "name" : "Bolle",
  "Photo gallery" : [ {
    "url" : "www.mangiami.org"
  }, {
    "url" : "www.mangiami.org"
  } ],
  "artistic event" : [ null, null ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

