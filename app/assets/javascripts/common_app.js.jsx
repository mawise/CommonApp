;$(function () {
  window.Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  window.Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  window.routes = (
    <Route path="/" component={Index}>
        <Route path="application" component={Application} />
    </Route>
  );
});
