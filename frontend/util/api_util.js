var ApiActions = require('../actions/api_actions');

module.exports = {
  logOut: function () {
    $.ajax({
      url: "session",
      method: "delete",
      success: function () {
        location = 'session/new';
      }
    });
  },

  fetchApplication: function () {
    $.ajax({
      url: "api/applications",
      success: function (application) {
        ApiActions.receiveApplication(application);
      }
    });
  },  

  saveApplication: function (application) {
    var id = application.id;
    $.ajax({
      url: "api/applications/" + id,
      method: "PUT",
      data: { application: application },
      success: function (application) { 
        ApiActions.receiveApplication(application, ["Application saved"]);
      },
      error: function (errors) {
        ApiActions.receiveErrors(JSON.parse(errors.responseText));
      }
    });
  }
};
