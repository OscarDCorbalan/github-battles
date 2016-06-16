const React = require('react');
const PropTypes = React.PropTypes;
const Link = require('react-router').Link;
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const MainContainer = require('./MainContainer');
const Loading = require('./Loading');
const styles = require('../styles');


function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">
          Start Over
        </button>
      </Link>
    </div>
  )
}


function Tie(props) {
  return (
    <MainContainer>
      <h1>It's a tie!</h1>
      <StartOver />
    </MainContainer>
  )
}


function Results(props) {
  if(props.isLoading){
    return (
      <Loading speed={100} text='Calculating' />
    )
  }

  if(props.scores[0] === props.scores[1]){
    return (
      <Tie scores={props.scores} playersInfo={props.playersInfo} />
    );
  }

  const ixWinner = props.scores[0] > props.scores[1] ? 0 : 1;
  const ixLoser = ixWinner === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[ixWinner]} info={props.playersInfo[ixWinner]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[ixLoser]} info={props.playersInfo[ixLoser]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}


Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};


module.exports = Results;
