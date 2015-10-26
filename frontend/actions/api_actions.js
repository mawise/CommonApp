var ApplicationConstants = require('../constants/application_constants');

module.exports = {
  receiveApplication: function (application, notifications) {
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATION_RECEIVED,
      application: application,
      notifications: notifications
    }); 
  },

  receiveErrors: function (errors) {
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.ERRORS_RECEIVED,
      errors: errors
    });
  } 
};
