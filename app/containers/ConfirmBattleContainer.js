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
      playersInfo: []
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

  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
                     onInitiateBattle={this.handleInitiateBattle}
                     playersInfo={this.state.playersInfo} />
    );
  }

});