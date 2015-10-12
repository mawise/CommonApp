;$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  window.Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  React.render((
    <Router>
      <Route path="/" component={Index}>
        <Route path="application" component={Application} />
      </Route>
    </Router>
  ), document.getElementById("main"));
});
