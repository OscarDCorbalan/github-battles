const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const PropTypes = React.PropTypes;
const styles = require('../styles');
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const MainContainer = require('./MainContainer');

const ConfirmBattle = props => (
  props.isLoading ?
    <p>Loading</p> :
    <MainContainer>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Player 1">
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Player 2">
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate Battle
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">
              Reselect players
            </button>
          </Link>
        </div>
      </div>
    </MainContainer>
);


ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};


module.exports = ConfirmBattle;