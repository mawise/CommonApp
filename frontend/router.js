var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "application": "application",
    "*redirect": "redirectToHome"
  }
});
