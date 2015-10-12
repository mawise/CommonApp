;window.Application = React.createClass({
  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function () {
    return { application: ApplicationStore.application() };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },
  
  componentDidMount: function () {
    ApplicationStore.addChangeListener(this._onChange);
    ApiUtil.fetchApplication();
  },

  componentWillUnmount: function () {
    ApplicationStore.removeChangeListener(this._onChange);
  },

  render: function () {
    if(!this.state.application) { return <div></div>; }

    return(
      <div>{this.state.application.user_id}</div>
    );
  }
});
