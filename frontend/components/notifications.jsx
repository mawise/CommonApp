var React = require('react');

module.exports = React.createClass({
  render: function () {
    return <ul className={this.props.className + " notifications"}>
      {this.props.notifications && this.props.notifications.map(function (note, i) {
        return <li key={i}>{note}</li>;
      })}  
    </ul>;
  }
});
