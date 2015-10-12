;window.Index = React.createClass({
  render: function () {
    return (
      <div>
        <div><Link to="/application">Application</Link></div>
        {this.props.children}  
      </div>    
    );
  }
});
