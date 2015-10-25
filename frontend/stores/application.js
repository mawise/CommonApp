var EventEmitter = require('events').EventEmitter;
var ApplicationConstants = require('../constants/application_constants');

var CHANGE_EVENT = "application_change";
var ERROR_EVENT = "error";
var _application;

var resetApplication = function (application) {
  _application = application;
};

module.exports = $.extend({}, EventEmitter.prototype, {
  application: function () {
    if(!_application) { return null; }
    return $.extend(true, {}, _application);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback); 
  },

  addErrorListener: function (callback) {
    this.on(ERROR_EVENT, callback);
  },

  removeErrorListener: function (callback) {
    this.removeListener(ERROR_EVENT, callback);
  },
    
  dispatcherID: AppDispatcher.register(function (payload) {
    switch(payload.actionType) {
      case ApplicationConstants.APPLICATION_RECEIVED:
        resetApplication(payload.application);
        ApplicationStore.emit(
          CHANGE_EVENT, 
          payload.notifications
        );
        break; 
      case ApplicationConstants.ERRORS_RECEIVED:
        ApplicationStore.emit(
          ERROR_EVENT,
          payload.errors
        );
        break;
    }
  })
});
