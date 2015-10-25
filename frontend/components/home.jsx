module.exports = React.createClass({
  goApplication: function () {
    Backbone.history.navigate('application', { trigger: true });
  },

  render: function () {
    return (
      <div>
        <a onClick={this.goApplication}>Application</a>
      </div>    
    );
  }
});
