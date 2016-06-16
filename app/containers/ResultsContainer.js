const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const Results = require('../components/Results');
const githubHelpers = require('../utils/githubHelpers');

const ResultsContainer = React.createClass({

  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },

  componentDidMount: function() {
    const playersInfo = this.props.location.state.playersInfo;
    githubHelpers.battle(playersInfo)
    .then(scores => this.setState({scores: scores,
                                   isLoading: false}));
  },

  render: function() {
    return (
      <Results isLoading={this.state.isLoading} 
               scores={this.state.scores} 
               playersInfo={this.props.location.state.playersInfo} />
    );
  }

});


module.exports = ResultsContainer;