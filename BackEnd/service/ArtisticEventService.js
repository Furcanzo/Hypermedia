'use strict';


/**
 * Returns all the artistic events
 *
 * limit Integer maximum number of artistic evrnts returned (optional)
 * returns List
 **/
exports.getAllArtisticEvents = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "4th May 2019",
  "performer" : {
    "Details" : "A great dancer",
    "name" : "Bolle",
    "Photo gallery" : [ {
      "url" : "www.mangiami.org"
    }, {
      "url" : "www.mangiami.org"
    } ],
    "artistic event" : [ null, null ]
  },
  "seminar" : {
    "data" : "5 5 2018",
    "location" : "hall 2",
    "title" : "the theme of love"
  },
  "Photo gallery" : [ null, null ],
  "available" : "available",
  "abstract" : "The tragic story of two lovers",
  "title" : "Romeo and Juliet",
  "type" : "Music"
}, {
  "date" : "4th May 2019",
  "performer" : {
    "Details" : "A great dancer",
    "name" : "Bolle",
    "Photo gallery" : [ {
      "url" : "www.mangiami.org"
    }, {
      "url" : "www.mangiami.org"
    } ],
    "artistic event" : [ null, null ]
  },
  "seminar" : {
    "data" : "5 5 2018",
    "location" : "hall 2",
    "title" : "the theme of love"
  },
  "Photo gallery" : [ null, null ],
  "available" : "available",
  "abstract" : "The tragic story of two lovers",
  "title" : "Romeo and Juliet",
  "type" : "Music"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a single artistic event by title
 *
 * title String 
 * returns Artistic_event
 **/
exports.getArtisticEventByTitle = function(title) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "4th May 2019",
  "performer" : {
    "Details" : "A great dancer",
    "name" : "Bolle",
    "Photo gallery" : [ {
      "url" : "www.mangiami.org"
    }, {
      "url" : "www.mangiami.org"
    } ],
    "artistic event" : [ null, null ]
  },
  "seminar" : {
    "data" : "5 5 2018",
    "location" : "hall 2",
    "title" : "the theme of love"
  },
  "Photo gallery" : [ null, null ],
  "available" : "available",
  "abstract" : "The tragic story of two lovers",
  "title" : "Romeo and Juliet",
  "type" : "Music"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns multiple artistic events by type
 *
 * type String 
 * limit Integer maximum number of artistic events returned (optional)
 * returns List
 **/
exports.getArtisticEventByType = function(type,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "4th May 2019",
  "performer" : {
    "Details" : "A great dancer",
    "name" : "Bolle",
    "Photo gallery" : [ {
      "url" : "www.mangiami.org"
    }, {
      "url" : "www.mangiami.org"
    } ],
    "artistic event" : [ null, null ]
  },
  "seminar" : {
    "data" : "5 5 2018",
    "location" : "hall 2",
    "title" : "the theme of love"
  },
  "Photo gallery" : [ null, null ],
  "available" : "available",
  "abstract" : "The tragic story of two lovers",
  "title" : "Romeo and Juliet",
  "type" : "Music"
}, {
  "date" : "4th May 2019",
  "performer" : {
    "Details" : "A great dancer",
    "name" : "Bolle",
    "Photo gallery" : [ {
      "url" : "www.mangiami.org"
    }, {
      "url" : "www.mangiami.org"
    } ],
    "artistic event" : [ null, null ]
  },
  "seminar" : {
    "data" : "5 5 2018",
    "location" : "hall 2",
    "title" : "the theme of love"
  },
  "Photo gallery" : [ null, null ],
  "available" : "available",
  "abstract" : "The tragic story of two lovers",
  "title" : "Romeo and Juliet",
  "type" : "Music"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns multiple book
 *
 * data String 
 * limit Integer maximum number of books returned (optional)
 * returns List
 **/
exports.getEventByData = function(data,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an artistic event by title
 *
 * title2 String title of artistic event that needs to be updated
 * title String  (optional)
 * no response value expected for this operation
 **/
exports.updateEventByTitle = function(title2,title) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an artistic event by type
 *
 * type String type of artistic event that needs to be updated
 * title String  (optional)
 * no response value expected for this operation
 **/
exports.updateEventByType = function(type,title) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

