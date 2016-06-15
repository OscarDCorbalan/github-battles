const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');

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

    // Fetch info from github and update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(players => {
      this.setState({
        isLoading: false,
        playersInfo: [...players]
      });
    });
  },

  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} 
                     playersInfo={this.state.playersInfo} />
    );
  }

});