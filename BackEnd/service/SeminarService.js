'use strict';


/**
 * Returns all the seminaries
 *
 * limit Integer maximum number of seminaries returned (optional)
 * returns List
 **/
exports.getAllSeminaries = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : "5 5 2018",
  "location" : "hall 2",
  "title" : "the theme of love"
}, {
  "data" : "5 5 2018",
  "location" : "hall 2",
  "title" : "the theme of love"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

