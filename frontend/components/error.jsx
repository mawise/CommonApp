module.exports = React.createClass({
  render: function () {
    return <div className={this.props.errorClass + "error"}>
      {this.props.error}
    </div>;
  }
});
