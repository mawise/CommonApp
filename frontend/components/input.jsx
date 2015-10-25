var ReactAddons = require('react-addons');
var Error = require('./error.jsx');

module.exports = React.createClass({
  mixins: [ReactAddons.LinkedStateMixin],

  getInitialState: function () {
    var state = { className: "" };
    state[this.props.name] = this.props.form.state[this.props.name];
    return state;
  },

  componentDidMount: function () {
    ApplicationStore.addSaveListener(this._onSave);
    ApplicationStore.addErrorListener(this._onError);
  },

  componentWillUnmount: function () {
    ApplicationStore.removeSaveListener(this._onSave);
    ApplicationStore.removeErrorListener(this._onError);
  },

  _onError: function () {
    var error = ApplicationStore.errors()[this.props.name];
    if(error) {
      this.setState({ 
        error: error, 
        errorClass: "show",
        className: "error-label"
      });
    }
  },

  _onSave: function () {
    this.setState({
      error: undefined,
      errorClass: "no-show",
      className: ""
    });
  },

  _showEdit: function (e) {
    $(e.currentTarget).removeClass("hide-edit");
  },

  _edit: function (e) {
    this.props.form.setState(this.state);
    $(e.currentTarget).addClass("hide-edit");
  },  

  render: function () {
    return <div>
      <Error
        error={this.state.error}
        className={this.state.errorClass} 
      />
      <label className={this.state.className}>{this.props.displayName} <input 
        type="text"
        className="hide-edit"
        onFocus={this._showEdit}
        onBlur={this._edit}
        name={this.props.name}
        valueLink={this.linkState(this.props.name)}
      ></input></label>
    </div>;
  }
});
