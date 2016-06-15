const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');


module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function() {
    const query = this.props.location.query;
    // TODO fetch info from github and update state

  },

  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} 
                     playersInfo={this.state.playersInfo} />
    );
  }

});