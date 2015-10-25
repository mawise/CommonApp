var ApplicationConstants = require('../constants/application_constants');

module.exports = {
  beginSave: function () {
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.BEGIN_SAVE
    });  
  }
};
