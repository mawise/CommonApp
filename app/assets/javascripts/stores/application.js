;(function () {
  var CHANGE_EVENT = "application_change";
  var _application;

  resetApplication = function (application) {
    _application = application;
  };

  window.ApplicationStore = $.extend({}, EventEmitter.prototype, {
    application: function () {
      return $.extend(true, {}, _application);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback); 
    },
    
    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case ApplicationConstants.APPLICATION_RECEIVED:
          resetApplication(payload.application);
          ApplicationStore.emit(CHANGE_EVENT);
          break; 
      }
    })
  });
})();
