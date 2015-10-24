var React = require('react');
var Link = requier('react-router').Link;
var Application = require('./application.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div><Link to="/application">Application</Link></div>
        {this.props.children}  
      </div>    
    );
  }
});
