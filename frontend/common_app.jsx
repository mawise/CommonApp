window.React = require('react');
window.Router = require('react-router').Router;
var Route = require('react-router').Route;
var Index = require('./components/index.jsx');
var Application = require('./components/application.jsx');

window.routes = (
  <Route path="/" component={Index}>
      <Route path="application" component={Application} />
  </Route>
);
