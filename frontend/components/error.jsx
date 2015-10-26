module.exports = React.createClass({
  render: function () {
    return <div className={this.props.className + " error"}>
      {this.props.error}
    </div>;
  }
});
