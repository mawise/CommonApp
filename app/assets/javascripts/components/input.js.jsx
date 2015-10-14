;window.Input = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    var state = {};
    state[this.props.name] = this.props.value;
    return state;
  },

  _showEdit: function (e) {
    $(e.currentTarget).removeClass("hide-edit");
  },

  _edit: function (e) {
    this.props.onEdit(this.state);
    $(e.currentTarget).addClass("hide-edit");
  },  

  render: function () {
    return <label>{this.props.displayName} <input 
        type="text"
        className="hide-edit"
        onFocus={this._showEdit}
        onBlur={this._edit}
        name={this.props.name}
        valueLink={this.linkState(this.props.name)}
    ></input></label>;
  }
});
