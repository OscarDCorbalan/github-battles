const React = require('react');
const Prompt = require('../components/Prompt');

module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    const username = this.state.username;
    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerOne){ // We're picking the second player
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    }
    else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },

  render: function() {
    return (
      <Prompt header={this.props.route.header}
              username={this.state.username}
              onSubmitUser={this.handleSubmitUser}
              onUpdateUser={this.handleUpdateUser}/>
    )
  }

});