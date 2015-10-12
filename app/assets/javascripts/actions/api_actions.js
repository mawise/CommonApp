;window.ApiActions = {
  receiveApplication: function (application) {
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATION_RECEIVED,
      application: application
    }); 
  }  
};
