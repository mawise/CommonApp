var Backbone = require('backbone');
var Router = require('./router');
var ApiUtil = require('./util/api_util');
var Home = require('./components/home.jsx');
var Application = require('./components/application.jsx');

module.exports = React.createClass({
  getDefaultProps: function () {
    return { repo: 'rails/rails' };
  },

  componentWillMount: function () {
    this.router = new Router();
    this.router.on('route:home', this.home);
    this.router.on('route:application', this.application);
    this.router.on('route:redirectToHome', this.goHome);
  },

  componentDidMount: function () {
    Backbone.history.start();
  },

  componentWillReceiveProps: function (newProps) {
    if(this.props.repo != newProps.repo) {
      this.goHome();
    }
  },

  goHome: function () {
    this.router.navigate("", { trigger: true }); 
  },

  home: function () {
    this.setState({ page: 'home' });  
  },

  application: function () {
    this.setState({ page: 'application' });
  },

  render: function () {
    if(!this.state) { return <div></div>; }

    var component;
    switch(this.state.page) {
      case 'home':
        component = <Home />;
        break;
      case 'application':
        component = <Application />;
        break;
    }

    return <div>
      <button type='button' onClick={ApiUtil.logOut}>Log Out</button>
      {component}
    </div>;
  }
});
