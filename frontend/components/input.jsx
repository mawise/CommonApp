var ReactAddons = require('react-addons');
var Error = require('./error.jsx');

module.exports = React.createClass({
  mixins: [ReactAddons.LinkedStateMixin],

  getInitialState: function () {
    var state = {};
    state[this.props.name] = this.props.form.state[this.props.name];
    return state;
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
        error={this.props.form.state.errors && this.props.form.state.errors[this.props.name]} 
        className={this.props.form.state.errorClass} 
      />
      <label>{this.props.displayName} <input 
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
