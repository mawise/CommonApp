;window.ApiUtil = {
  fetchApplication: function () {
    $.ajax({
      url: "api/applications/",
      success: function (application) {
        ApiActions.receiveApplication(application);
      }
    });
  }  
};
